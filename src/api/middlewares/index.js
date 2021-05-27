/**
 * This is where you will export all the files that contain
 * the middlewares functions within the middlewares folder for easy access.
 */
module.exports = {
  logger: require("./logger"),
  auth: require("./authentication/auth"),
}