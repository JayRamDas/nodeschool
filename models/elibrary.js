const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Elibrary = Db.define('elibrary',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
file_name: {
    type: DataTypes.STRING,
    allowNull: false,
},
file_location: {
    type: DataTypes.STRING,
    allowNull: false,
},
size: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
type: {
    type: DataTypes.STRING,
    allowNull: false,
},
role: {
    type: DataTypes.INTEGER,
    allowNull: true,
},
uploader: {
    type: DataTypes.INTEGER,
    allowNull: true,
},
    status:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
timestamps: true
}

);

module.exports = Elibrary;