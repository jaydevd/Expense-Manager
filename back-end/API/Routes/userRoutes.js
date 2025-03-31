const express = require('express');
const router = express.Router();
const { AdminSignUp, AdminLogIn, AdminLogOut } = require('../Controllers/adminController');
const isUserAuthenticated = require('../Middlewares/isAdminAuthenticated');


router.post('/user/signup', AdminSignUp);

router.route('/user/login')
    .get(AdminLogIn);

router.route('/user/logout')
    .get(AdminLogOut);

module.exports = {
    userRoutes: router
}