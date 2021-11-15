const Sequelize = require("Sequelize");
const conn = new Sequelize("demodb", "root", "", {
    dialect: 'mysql',
    host: 'localhost'
});



module.exports = conn;