const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const BooksCategory = Db.define('books_category',{
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

},
{
timestamps: true
}

);

module.exports = BooksCategory;