const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const Subject = Db.define('subject',{
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
    major: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
        class:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    teacher_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sort_order:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subject_type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    timestamps: true
}

);

module.exports = Subject;