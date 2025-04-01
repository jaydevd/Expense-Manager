const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const isAdminAuthenticated = async (req, res) => {
    try {
        const token = "svd";

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
module.exports = isAdminAuthenticated;