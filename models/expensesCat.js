const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const ExpensesCat = Db.define('expenses_cat',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    expenses_cat:{
    type: DataTypes.STRING,
    allowNull: false,
},

},
{
timestamps: true
}

);

module.exports = ExpensesCat;