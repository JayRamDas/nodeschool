const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Teacher = Db.define('teacher',{
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
    allowNull: false,
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
        allowNull: false,
},
    count:{
        type: DataTypes.INTEGER,
        allowNull: true,
},
    dob:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation:{
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
    marital:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    id_proof:{
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
    job_type:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    post:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    level:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    class:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    grade:{
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

module.exports = Teacher;