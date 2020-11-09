//Se permite que los usuarios registrados puedan realizar acciones con este token

const config = require('../config');
const jwt = require('jsonwebtoken');
module.exports = {
    tokenMiddle: function (req, res, next) {
        const token = req.headers['access-token'];
        if (token) {
            jwt.verify(token, config.key, (err, decoded) => {
                if (err) {
                    return res.json({ mensaje: 'Invalid token' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.send({
                mensaje: 'No token given.'
            });
        }
    
    }
};