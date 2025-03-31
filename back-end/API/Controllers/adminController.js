const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const validator = require('validatorjs');
const { v4: uuidv4 } = require('uuid');
const { HTTP_STATUS_CODES } = require('../Config/constants');
const { Admin } = require('./../Models/Admin');

const AdminSignUp = async (req, res) => {
    try {
        const { name, email, password, } = req.body;
        const id = uuidv4();

        const hashedPassword = bcrypt.hash(password, 10);
        const res = await Admin.create({ id: id, name: name, email: email, password: hashedPassword });

        return res.status(200).json({
            status: HTTP_STATUS_CODES.SUCCESS,
            message: '',
            data: res.id,
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

const AdminLogIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({
            attributes: ['id', 'name', 'email'],
            where: { email: email }
        });

        if (!admin) {
            return res.status(400).json({
                status: HTTP_STATUS_CODES.CLIENT_ERROR,
                message: '',
                data: '',
                error: ''
            })
        }

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

const AdminLogOut = async (req, res) => {

}

module.exports = {
    AdminSignUp,
    AdminLogIn,
    AdminLogOut
}