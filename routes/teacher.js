const express = require('express');
const Teacher = require('../models/teacher');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await Teacher.findAll()
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
      await Teacher.findAll({where : {id : req.params.id}})
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
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            count,
            dob,
            designation,
            blood_group,
            father,
            mother,
            country,
            phone_no,
            marital,
            id_proof,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            job_type,
            post,
            level,
            grade,
            status,
            } = req.body
     await Teacher.create(
        {
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            count,
            dob,
            designation,
            blood_group,
            father,
            mother,
            country,
            phone_no,
            marital,
            id_proof,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            job_type,
            post,
            level,
            class:req.body.class,
            grade,
            status,
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
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            count,
            dob,
            designation,
            blood_group,
            father,
            mother,
            country,
            marital,
            id_proof,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            job_type,
            post,
            level,
            grade,
            status,
            } = req.body

         await Teacher.update(
         {
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            count,
            dob,
            designation,
            blood_group,
            father,
            mother,
            country,
            marital,
            id_proof,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            job_type,
            post,
            level,
            class:req.body.class,
            grade,
            status,
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
try {
    const resultId = await Teacher.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        Teacher.update(
            {
                status : 1,
            },

    {where:{id : req.params.id}})
    .then(() => {
        res.status(200).json({success:true, msg: "Delete success"})
    })
}
} catch (error) {
    res.status(400).json({success:false, error})
    
}
    
})

// router.delete('/:id' , async(req, res) => {
//    await Teacher.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })

module.exports = router;