module.exports = {
    adminMiddleware: function (req, res, next) {
        const role = req.headers ['isadmin'];;
        if (role == "Admin") {
            next();

        } else {
            res.send({
                mensaje: 'You dont have the permission to do this.'
            });
        }

    }
}