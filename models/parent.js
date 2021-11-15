const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Parent = Db.define('parent',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    father_name: {
    type: DataTypes.STRING,
    allowNull: true,
},
    mother_name: {
    type: DataTypes.STRING,
    allowNull: true,
},
    email: {
    type: DataTypes.STRING,
    allowNull: true,
},
    mobile_no1:{
        type: DataTypes.INTEGER,
        allowNull: true,
},
    mobile_no2:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
    address: {
    type: DataTypes.STRING,
    allowNull: true,
},
    profession:{
    type: DataTypes.STRING,
    allowNull: true,
},
    password: {
    type: DataTypes.STRING,
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

module.exports = Parent;