const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'to-do-list',
    password: 'Messi10*',
    port: 5432
});


pool.connect()
.then(() => console.log('connected server'))
.catch(err => console.error('connection failed'));

module.exports = pool