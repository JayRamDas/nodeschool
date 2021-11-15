const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const OnlineClassesTeacherDetails = Db.define('online_classes_teacher_details',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
url: {
    type: DataTypes.STRING,
    allowNull: false,
},
meeting_id: {
    type: DataTypes.STRING,
    allowNull: false,
},
passcode: {
    type: DataTypes.STRING,
    allowNull: true,
},
type: {
    type: DataTypes.INTEGER,
    allowNull: true,
},
},
{
timestamps: true
}

);

module.exports =  OnlineClassesTeacherDetails;