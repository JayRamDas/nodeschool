const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const StaffFile = Db.define('staff_file',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
    staff_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
},
    file_location:{
    type: DataTypes.STRING,
    allowNull: false,
},
    slug:{
    type: DataTypes.STRING,
    allowNull: false,
},

},
{
timestamps: true
}

);

module.exports = StaffFile;