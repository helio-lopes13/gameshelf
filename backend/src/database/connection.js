import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection:{
        host: 'localhost',
        port: 3306,
        user: 'luni',
        password: 'lunarin',
        database: 'gameshelf'
    },
    useNullAsDefault: true
});

export default connection;