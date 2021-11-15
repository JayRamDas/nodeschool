const express = require('express');
const OnlineClassesTeacherDetails = require('../models/onlineClassesTeacherDetails');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await OnlineClassesTeacherDetails.findAll()
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
      await OnlineClassesTeacherDetails.findAll({where : {id : req.params.id}})
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
            teacher_id,
            url,
            meeting_id,
            passcode,
            type
            } = req.body
     await OnlineClassesTeacherDetails.create(
        {
            teacher_id,
            url,
            meeting_id,
            passcode,
            type
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
            teacher_id,
            url,
            meeting_id,
            passcode,
            type
            } = req.body

         await OnlineClassesTeacherDetails.update(
         {
            teacher_id,
            url,
            meeting_id,
            passcode,
            type
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
    await OnlineClassesTeacherDetails.destroy(
     {where:{id : req.params.id}})
     .then(() => {
         res.status(200).json({success:true, msg: "delete success"})
     })
 })
 

// router.delete('/:id' , async(req, res) => {
// try {
//     const resultId = await OnlineClassesTeacherDetails.findAll({where : {id: req.params.id}});
//     // const result  = await resultId.json()
//     // console.log("result " , result)
//     if(resultId.length < 1){
//         res.send(' Requested Id not found')
//     } else {

//         OnlineClassesTeacherDetails.update(
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