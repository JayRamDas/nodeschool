const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const ExtraFeeList = Db.define('extra_fee_list',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    class_id:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
    fee_type_id:{
    type: DataTypes.INTEGER,
    allowNull: true,
},
    amount:{
    type: DataTypes.INTEGER,
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
},
{
timestamps: true
}

);

module.exports = ExtraFeeList;