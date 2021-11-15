const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const BooksBlock = Db.define('books_block',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    name:{
    type: DataTypes.STRING,
    allowNull: false,
},
    rack_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
},
{
timestamps: true
}

);

module.exports = BooksBlock;