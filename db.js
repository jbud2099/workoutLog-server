const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:00f2360c2e644c6b810092a80872e46a@localhost:5432/workout-log")

module.exports = sequelize;