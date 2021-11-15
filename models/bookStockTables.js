const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const BookStockTables = Db.define('book_stock_table',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    class_name:{
    type: DataTypes.STRING,
    allowNull: true,
},
    book_name:{
    type: DataTypes.STRING,
    allowNull: true,
},  
    book_publication:{
    type: DataTypes.STRING,
    allowNull: true,
},
    book_writter:{
    type: DataTypes.STRING,
    allowNull: true,
}, 
    storage_location:{
    type: DataTypes.STRING,
    allowNull: true,
}, 
    status:{
    type: DataTypes.INTEGER,
    allowNull:true,
}, 
   
},
{
timestamps: true
}

);

module.exports = BookStockTables; 