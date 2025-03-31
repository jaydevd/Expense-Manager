const express = require('express');
const router = express.Router();
const { AdminSignUp, AdminLogIn, AdminLogOut } = require('../Controllers/adminController');
const isAdminAuthenticated = require('../Middlewares/isAdminAuthenticated');

router.post('/admin/signup', AdminSignUp);

router.route('/admin/login')
    .get(AdminLogIn);

router.route('/admin/logout')
    .get(AdminLogOut);

module.exports = {
    adminRoutes: router
}