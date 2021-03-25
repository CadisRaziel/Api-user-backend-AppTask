// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      database: 'tasks',
      user:     'vihhstx',
      password: 'rhythms'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    } 
};
