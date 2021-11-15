const express = require('express');
const Staff = require('../models/staff');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await Staff.findAll()
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
      await Staff.findAll({where : {id : req.params.id}})
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
            dob,
            type,
            type_desc,
            blood_group,
            father,
            mother,
            country,
            position,
            marital,
            doc,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            status
            } = req.body
     await Staff.create(
        {
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            dob,
            type,
            type_desc,
            blood_group,
            father,
            mother,
            country,
            position,
            marital,
            doc,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            status
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
            dob,
            type,
            type_desc,
            blood_group,
            father,
            mother,
            country,
            position,
            marital,
            doc,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            status
            } = req.body

         await Staff.update(
         {
            name,
            email,
            password,
            address,
            mobile_no1,
            mobile_no2,
            gender,
            dob,
            type,
            type_desc,
            blood_group,
            father,
            mother,
            country,
            position,
            marital,
            doc,
            doc2,
            doc3,
            join_date,
            image,
            salary,
            status
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
    const resultId = await Staff.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        Staff.update(
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
//    await Staff.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })

module.exports = router;