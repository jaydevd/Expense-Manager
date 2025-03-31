const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const isUserAuthenticated = async (req, res) => {
    try {

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
export default isUserAuthenticated;