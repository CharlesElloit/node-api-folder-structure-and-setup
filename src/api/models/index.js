/**
 * This is where will export all the files within the
 * models folder for easy access. Eg: In any of the controller
 * you will do something like this, const { User } = require("../models")
 * instead of const { User } = require("../models/User.model")
 */

module.export = {
  User: require("./User.model"),
};
