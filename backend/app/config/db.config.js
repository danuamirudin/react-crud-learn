module.exports = {
  HOST: "34.101.85.245",
  USER: "danu",
  PASSWORD: "nightcore",
  DB: "staging",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
