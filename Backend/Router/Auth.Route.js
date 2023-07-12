const express = require('express');
const AuthController = require('../controller/auth/Auth.controller');

const router = express.Router();

router.post('/signup', AuthController.signUp);
router.post('/signin', AuthController.signIn);
module.exports = router;
