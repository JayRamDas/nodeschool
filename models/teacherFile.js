const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const TeacherFile = Db.define('teacher_file',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    teacher_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
    file_location:{
    type: DataTypes.STRING,
    allowNull: false,
},

},
{
timestamps: true
}

);

module.exports = TeacherFile;