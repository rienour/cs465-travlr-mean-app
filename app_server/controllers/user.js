/**
 * GET Users Listing
 *
 * @param req Express Request object
 * @param res Express Response object
 * @param next Express next function
 */
const usersController = (req, res, next) => {
  res.send('respond with a resource');
}

module.exports = {
  usersController,
}
