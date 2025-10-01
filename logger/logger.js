/**
  * This constant value indicates the log levels supported by the logger.
  */
const LogLevels = Object.freeze({
  TRACE: 0,
  DEBUG: 1,
  INFO: 2,
  WARN: 3,
  ERROR: 4,
});

/**
  * This utility function handles building a consistent structure for messages
  * logged to the console. The output format will be a date ISO string, log
  * level surrounded by square brackets, and the message separaeted by tab characters
  *
  * @param level {keyof LogLevels} The log level the message should be built for
  * @param message {string} The message to be logged to the console
  */
const buildLogMessage = (level, message) => {
  return `${new Date().toISOString()}\t[${level}]\t${message}`;
}

/**
  * This logger centralizes the messages produced to stdout and stderr for the
  * application
  *
  * @type Record<string, (msg: string) => void>
  */
const Logger = {
  trace: (msg) => console.info(buildLogMessage('TRACE', msg)),
  debug: (msg) => console.debug(buildLogMessage('DEBUG', msg)),
  info: (msg) => console.info(buildLogMessage('INFO', msg)),
  warn: (msg) => console.warn(buildLogMessage('WARN', msg)),
  error: (msg) => console.error(buildLogMessage('ERROR', msg)),
}

module.exports = { Logger };
