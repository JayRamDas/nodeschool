const express = require('express');
const OnlineAttendance = require('../models/onlineAttendance');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await OnlineAttendance.findAll()
    .then((response) => {
        res.status(200).json({ success : true, response})
    }).catch(err => {
        console.log(err)
    })   
   } catch (error) {
    res.status(400).json({success:false, error, msg : "error occured"})
   }
});

router.get('/:id', async(req, res) => {
    try {
      await OnlineAttendance.findAll({where : {id : req.params.id}})
    .then((response) => {
        if(response.length === 0 ) {
            res.status(200).json({ success : true, msg:" no data found"})
            }
            res.status(200).json({ success : true, response})
        }).catch(err => {
            console.log(err)
        })
     } catch (error) {
        res.status(400).json({success:false, error, msg : "error occured"}) 
     }
});

router.post('/', async(req, res)=>{
    try {
        const {
               student_id,
               section_id,
                class_id,
                teacher_id,
                subject_id,
                roll_number,
                status,
                attendance_on,
                join_count,
                rejoin_on
            } = req.body
     await OnlineAttendance.create(
        {
            student_id,
            section_id,
            class_id,
            teacher_id,
            subject_id,
            roll_number,
            status,
            attendance_on,
            join_count,
            rejoin_on   
        }
    )
    .then((response) => {
        res.send(response)
    } )     
    } catch (error) {
        res.status(400).json({success:false,error})
    }
});

router.put('/', async(req, res)=>{
    try{
    const { 
            id,
            student_id,
            section_id,
            class_id,
            teacher_id,
            subject_id,
            roll_number,
            status,
            attendance_on,
            join_count,
            rejoin_on
            } = req.body

         await OnlineAttendance.update(
         {
            student_id,
            section_id,
            class_id,
            teacher_id,
            subject_id,
            roll_number,
            status,
            attendance_on,
            join_count,
            rejoin_on
        },
        {where:{id}}
    )
    .then(() => {
        res.status(200).json({success:true, msg: "Update success"})
    })
    
} catch (error) {
    res.status(400).json({success:false,error})
}
});


router.delete('/:id' , async(req, res) => {
    await OnlineAttendance.destroy(
     {where:{id : req.params.id}})
     .then(() => {
         res.status(200).json({success:true, msg: "delete success"})
     })
 })
 

// router.delete('/:id' , async(req, res) => {
// try {
//     const resultId = await OnlineAttendance.findAll({where : {id: req.params.id}});
//     // const result  = await resultId.json()
//     // console.log("result " , result)
//     if(resultId.length < 1){
//         res.send(' Requested Id not found')
//     } else {

//         OnlineAttendance.update(
//             {
//                 status : 1,
//             },

//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "Delete success"})
//     })
// }
// } catch (error) {
//     res.status(400).json({success:false, error})
    
// }
    
// })

module.exports = router;