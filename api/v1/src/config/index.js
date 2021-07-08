/**
 * This is where you will export all the files that contain
 * the config functions and constant values within the config folder
 * for easy access.
 */
const constants = require('./constants');
const DBConnection = require('./DatabaseConfig');

module.exports = {
  constants,
  DBConnection,
};
