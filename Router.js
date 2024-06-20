const express = require('express');
const router = express.Router();
const authController = require('./Controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.delete('/:id', authController.deleteUser);

module.exports = router;