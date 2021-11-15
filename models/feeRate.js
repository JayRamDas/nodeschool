const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const FeeRate = Db.define('fee_rate',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    class:{
    type: DataTypes.STRING,
    allowNull: false,
},
    type:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
    amount:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
    date:{
    type: DataTypes.STRING,
    allowNull: false,
},

},
{
timestamps: true
}

);

module.exports = FeeRate;