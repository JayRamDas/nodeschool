const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const OnlineAttendance = Db.define('online_attendance',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    section_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    roll_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    status: {
    type: DataTypes.STRING,
    allowNull: false,
},    
    attendance_on: {
    type: DataTypes.INTEGER,
    allowNull: false,
},   
    join_count: {
    type: DataTypes.INTEGER,
    allowNull: false,
},   
    rejoin_on: {
    type: DataTypes.INTEGER,
    allowNull: false,
},   
},
{
timestamps: true
}

);

module.exports =  OnlineAttendance;