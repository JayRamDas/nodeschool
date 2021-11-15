const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const ExpensesAdd = Db.define('expenses_add',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
bill_print_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
ecat_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
vendor_id:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
expenses_title:{
    type: DataTypes.STRING,
    allowNull: false,
},
with_quantity:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
quantity:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
quantity:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
rate:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
amount:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
file:{
    type: DataTypes.STRING,
    allowNull: true,
},
description:{
    type: DataTypes.STRING,
    allowNull: false,
},
date:{
    type: DataTypes.STRING,
    allowNull: true,
},
year_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = ExpensesAdd;