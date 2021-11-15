const express = require('express');
const app = express();
const cors = require('cors')

const DbCon = require('./util/database')

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api/subject' , require('./routes/subject'))

app.use('/api/studentinfo' , require('./routes/studentInfo'))

app.use('/api/teacher' , require('./routes/teacher'))

app.use('/api/staff' , require('./routes/staff'))

app.use('/api/parent' , require('./routes/parent'))

app.use('/api/elibrary' , require('./routes/elibrary'))

app.use('/api/expensesAdd' , require('./routes/expensesAdd'))

app.use('/api/feerate' , require('./routes/feeRate'))

app.use('/api/onlineclassesteacherdetails' , require('./routes/onlineClassesTeacherDetails'))

app.use('/api/onlineclassesdetails' , require('./routes/onlineClassesDetails'))

app.use('/api/onlineattendance' , require('./routes/onlineAttendance'))

app.use('/api/expensescat' , require('./routes/expensesCat'))

app.use('/api/extrafeelist' , require('./routes/extraFeeList'))

app.use('/api/teacherfile' , require('./routes/teacherFile'))

app.use('/api/stafffile' , require('./routes/staffFile'))

app.use('/api/booksblock' , require('./routes/booksBlock'))

app.use('/api/bookscategory' , require('./routes/booksCategory'))

app.use('/api/books' , require('./routes/books'))

app.use('/api/bookstocktables' , require('./routes/bookStockTables'))





DbCon.sync().then(() => {
  app.listen(8000,()=>{
      console.log("Listening to the port 8000");
  });
})
  





// const mongoose = require('mongoose'); for db connection use this in top of page 
//Connection with mongodb using mongoose
// mongoose.connect("mongodb://localhost:27017/jaggu", {useNewUrlParser: true, useUnifiedTopology: true})
// .then( () => 
//    console.log('db connected successfully'))
//    .catch((err)=> console.log(err));
   
