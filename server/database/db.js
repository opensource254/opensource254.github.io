const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: '',
        charset: 'utf8'
    }
})
module.exports = require('bookshelf')(knex)
