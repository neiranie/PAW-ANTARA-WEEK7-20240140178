/**
 * @file Route untuk Authentication. Di-mount di `routes/index.js` sebagai `/api/auth`.
 */

const express = require("express");
const authController = require("../controllers/auth.controller");

const router = express.Router();

/**
 * @route POST /api/auth/login
 * @description Login pakai email & password, balikin data user (tanpa token).
 * @access Public
 * @body {string} email
 * @body {string} password
 */
router.post("/login", authController.login);
router.post("/register", authController.register);

/**
 * TODO: Register
 * @route POST /api/auth/register
 * router.post('/register', authController.register);
 */

module.exports = router;
