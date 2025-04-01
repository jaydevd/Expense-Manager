const express = require('express');
const router = express.Router();
const { AdminSignUp, AdminLogIn, AdminLogOut } = require('../Controllers/adminController');
const isAdminAuthenticated = require('./../Middlewares/isAdminAuthenticated');

router.post('/signup', AdminSignUp);

router.route('/login')
    .post(AdminLogIn);

router.route('/logout')
    .all(isAdminAuthenticated)
    .get(AdminLogOut);

module.exports = {
    adminRoutes: router
}