const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');
const auth = require("../middleware/jwt_auth");

// Register route does not require authentication, so no auth middleware here
router.post('/register', UserController.registerUser);

// Login route (still needs to be accessible)
router.post('/login', UserController.login);

// Route to create a new token (usually used for refreshing tokens or getting a new one)
router.post('/newToken', UserController.newToken);

// Protected routes: authentication required for these
router.get('/details', auth.authentication, UserController.getUserDetails);
router.post('/change-password', auth.authentication, UserController.changeUserPassword);

module.exports = router;
