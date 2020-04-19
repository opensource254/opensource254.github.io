const bookshelf = require('../../database/db')
module.exports = bookshelf.model('User', {
    tableName: 'users',
})
