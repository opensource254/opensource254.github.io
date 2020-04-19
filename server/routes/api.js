const Router = require('express').Router()
const User = require('../app/models/user')
new User()
Router.get('/', async (req, res) => {
    try {
        const all = await User.collection().fetch()
        return res.json({ 'users': all })
    } catch (error) {
        res.status(500)
        res.send(error)

        return
    }
})

module.exports = Router