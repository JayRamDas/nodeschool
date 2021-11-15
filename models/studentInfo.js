const {Sequelize,DataTypes} = require('sequelize');
const Db = require('../util/database');

const StudentInfo = Db.define('stundent_info',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    admission_no: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    class:{
        type: DataTypes.STRING,
        allowNull: false
    },
    section:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    roll_no:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    symbol_no:{
        type: DataTypes.STRING,
        allowNull: false
    },
    registration_no:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dob_bs:{
        type: DataTypes.DATE,
        allowNull: false
    },
    dob_ad:{
        type: DataTypes.DATE,
        allowNull: false
    },
    mobile_no:{
        type: DataTypes.STRING,
        allowNull: true
    },
    caste:{
        type: DataTypes.STRING,
        allowNull: true
    },
    blood_group:{
        type: DataTypes.STRING,
        allowNull: false
    },
    image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    payment_type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    tution:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tution_fee:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    mode_of_transport:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bus_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bus_fee:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    hostel:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hostel_fee:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    computer:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    computer_fee:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    left_date:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    },
    parent_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    batch_year_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
{
    timestamps: true
}

);

module.exports = StudentInfo;