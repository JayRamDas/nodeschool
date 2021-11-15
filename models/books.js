const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Books = Db.define('books',{
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
    subject_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},  
    publisher:{
    type: DataTypes.STRING,
    allowNull: true,
},
    class_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
}, 
    category_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
}, 
    author:{
    type: DataTypes.STRING,
    allowNull: true,
}, 
    published_date:{
    type: DataTypes.STRING,
    allowNull: true,
}, 
},
{
timestamps: true
}

);

module.exports = Books; 