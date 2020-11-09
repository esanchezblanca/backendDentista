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

//adminMiddleware es una función que se crea para comprobar si el que hace la petición es el admin o no
//Si no es admin devuelve error que dice "no tienes los permisos necesarios para esta acción"