
const userService = require('../services/user-service');

function addUserRoutes(app) {

    app.post('/user', (req, res) => {
        userService.addUser(req.body)
        .then(user => res.json(user))
    })
}

module.exports = addUserRoutes
