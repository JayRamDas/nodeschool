const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Staff = Db.define('staff',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    name: {
    type: DataTypes.STRING,
    allowNull: false,
},
    email: {
    type: DataTypes.STRING,
    allowNull: true,
},
    password: {
    type: DataTypes.STRING,
    allowNull: true,
},
    address: {
    type: DataTypes.STRING,
    allowNull: false,
},
    mobile_no1:{
        type: DataTypes.STRING,
        allowNull: false,
},
    mobile_no2:{
    type: DataTypes.STRING,
    allowNull: true,
},
    gender:{
        type: DataTypes.STRING,
        allowNull: true,
},
    type:{
        type: DataTypes.STRING,
        allowNull: false,
},
    type_desc:{
    type: DataTypes.STRING,
    allowNull: true,
},
    dob:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    blood_group:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    father:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    mother:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    country:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    position:{
        type: DataTypes.STRING,
        allowNull: true,
    },

    marital:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    doc:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    doc2:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    doc3:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    join_date:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    salary:{
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

module.exports = Staff;