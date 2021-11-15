const { response } = require('express');
const express = require('express');
const router = express.Router()

const StudentInfo  = require('../models/studentInfo');

router.get('/', async(req, res) => {
 try {
    await StudentInfo.findAll()
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
    await StudentInfo.findAll({where : {id : req.params.id}})
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

router.post('/',  async(req, res)=>{
    try {
        const { name,
            admission_no,
            roll_no,
            section,
            email,
            address,
            password,
            symbol_no,
            registration_no,
            gender,
            dob_bs,
            dob_ad,
            caste,
            blood_group,
            image,
            mobile_no,
            payment_type,
            category,
            tution,
            tution_fee,
            mode_of_transport,
            bus_id,
            bus_fee,
            hostel,
            hostel_fee,
            computer,
            computer_fee,
            left_date,
            description,
            parent_id,
            batch_year_id,
            status
            } = req.body
  await StudentInfo.create(
        {
            name,
            admission_no,
            roll_no,
            class:req.body.class,
            section,
            email,
            address,
            password,
            symbol_no,
            registration_no,
            gender,
            dob_bs,
            dob_ad,
            caste,
            blood_group,
            image,
            mobile_no,
            payment_type,
            category,
            tution,
            tution_fee,
            mode_of_transport,
            bus_id,
            bus_fee,
            hostel,
            hostel_fee,
            computer,
            computer_fee,
            left_date,
            description,
            parent_id,
            batch_year_id,
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
            admission_no,
            roll_no,
            section,
            email,
            address,
            password,
            symbol_no,
            registration_no,
            gender,
            dob_bs,
            dob_ad,
            caste,
            blood_group,
            image,
            mobile_no,
            payment_type,
            category,
            tution,
            tution_fee,
            mode_of_transport,
            bus_id,
            bus_fee,
            hostel,
            hostel_fee,
            computer,
            computer_fee,
            left_date,
            description,
            parent_id,
            batch_year_id,
            status
            } = req.body

         await StudentInfo.update(
         {
            name,
            admission_no,
            roll_no,
            class:req.body.class,
            section,
            email,
            address,
            password,
            symbol_no,
            registration_no,
            gender,
            dob_bs,
            dob_ad,
            caste,
            blood_group,
            image,
            mobile_no,
            payment_type,
            category,
            tution,
            tution_fee,
            mode_of_transport,
            bus_id,
            bus_fee,
            hostel,
            hostel_fee,
            computer,
            computer_fee,
            left_date,
            description,
            parent_id,
            batch_year_id,
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
    const resultId = await StudentInfo.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        StudentInfo.update(
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

// router.delete('/:id', async(req, res) => {
//     await StudentInfo.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true,error})
//     })
// })


module.exports= router;