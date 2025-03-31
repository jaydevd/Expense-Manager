const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const validator = require('validatorjs');
const { v4: uuidv4 } = require('uuid');
const { HTTP_STATUS_CODES } = require('../Config/constants');

const UserSignUp = async (req, res) => {
    try {
        return res.status(200).json({
            status: HTTP_STATUS_CODES.SUCCESS,
            message: '',
            data: '',
            error: ''
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
            message: '',
            data: '',
            error: error.message
        })
    }
}

module.exports = {
    UserSignUp
}