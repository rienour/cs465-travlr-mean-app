const { Logger } = require('../logger/logger');
const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}/travlr`;
const readLine = require('readline');

/**
  * This function handles establishing a connection between the applilcation
  * and the database
  */
const connect = () => {
  Logger.trace('Attempting to eastablish mongoose connection to database...')
  setTimeout(() => mongoose.connect(dbURI, {}), 1000);
}

mongoose.connection.on('connected', () => {
  Logger.info(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (error) => {
  console.error('Mongoose connection error: ', error);
});

mongoose.connection.on('disconnected', () => {
  Logger.info('Mongoose disconnected');
});

// Windows Specific Event Listener
if (process.platform === 'win32') {
  const readInterface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readInterface.on('SIGINT', () => {
    process.emit('SIGINT');
  })
}

/**
  * This function handles a graceful shutdown for the Mongoose connection
  *
  * @param msg {string} Message for disconnect reason.
  */
const gracefulShutdown = (msg) => {
  mongoose.connection.close(() => {
    console.info(`Mongoose disconnected through ${msg}`)
  });
}

process.on('SIGINT', () => {
  gracefulShutdown('Application initiated termination');
});

process.on('SIGTERM', () => {
  gracefulShutdown('Application initiated shutdown');
});

// Establish initial DAtabase connection
connect();

module.exports = mongoose;
