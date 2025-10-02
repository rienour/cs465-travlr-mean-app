module.exports = {
  trips: {
    url: "http://localhost:3000/api/trips",
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  },
  meals: {
    url: "http://localhost:3000/api/meals",
    options: {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  }
};
