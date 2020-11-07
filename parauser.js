const CustomerController = {
showAll(req, res) {
        Customer.findAll()
            .then(customers => res.send(customers))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'Ha habido un problema tratando de recuperar los users'
                })
            })
    },

    showId(req,res) {

        let idCustomer = req.body.id;

        Customer.query(`SELECT * from Customers WHERE id = ${idCustomer}`)
            .then(customers => res.send(customers))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'No se encuentra el usuario'
                })
            })
    },


    async delete(req, res) {
        try {
            const email = await User.destroy({
                where: {
                    email: req.body.email
                }
            })
            if (!email) {
                return res.status(400).send({
                    message: 'Email not found'
                })
            }
            res.send({
                message: 'Account successfully removed'
            })
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problem trying to remove the account'
            })
        }
    },



    getById(req, res) {
        User.findByPk(req.body.id)
            .then(user => res.send(user))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to find the user'
                })
            })
    },