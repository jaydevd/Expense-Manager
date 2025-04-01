const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const Validator = require('validatorjs');
const { v4: uuidv4 } = require('uuid');
const { HTTP_STATUS_CODES } = require('../Config/constants');
const { Admin } = require('./../Models/Admin');

const AdminSignUp = async (req, res) => {
    try {
        const { name, email, password, } = req.body;

        const validation = new Validator({
            name: name,
            email: email,
            password: password
        }, {
            name: 'required',
            email: 'required',
            password: 'required'
        })

        if (validation.fails()) {
            return res.status(400).json({
                status: HTTP_STATUS_CODES.CLIENT_ERROR,
                message: '',
                data: '',
                error: validation.errors.all()
            })
        }

        const id = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await Admin.create({
            id: id,
            name: name,
            email: email,
            password: hashedPassword,
            is_active: true,
            is_deleted: false,
            created_at: Math.floor(Date.now() / 1000),
            created_by: id
        });

        if (!response) {
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
            attributes: ['id', 'name', 'email', 'password'],
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

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({
                status: HTTP_STATUS_CODES.CLIENT_ERROR,
                message: "passwords doesn't match",
                data: '',
                error: ''
            })
        }

        const token = jwt.sign({
            id: admin.id
        }, process.env.SECRET_KEY);

        return res.status(200).json({
            status: HTTP_STATUS_CODES.SUCCESS,
            message: '',
            data: token,
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