const { Sequelize, DataTypes } = require ('sequelize');

const sequelize = new Sequelize('api', 'postgres', 'postgres',{
    host: 'localhost',
    port: '5432',
    dialect: 'postgres'
})


connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
connect();

module.exports = sequelize;