const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const OnlineClassesDetails = Db.define('online_classes_details',{
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
    subject_id: {
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
    url: {
    type: DataTypes.STRING,
    allowNull: false,
},
    is_active: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
    date: {
    type: DataTypes.STRING,
    allowNull: true,
},
    hosting_start: {
    type: DataTypes.STRING,
    allowNull: true,
},
    hosting_end: {
    type: DataTypes.STRING,
    allowNull: true,
   },

},
{
timestamps: true
}

);

module.exports =  OnlineClassesDetails;