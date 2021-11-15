const express = require('express');
const ExpensesAdd = require('../models/expensesAdd');
const router = express.Router();


router.get('/', async(req, res) => {
   try {
   await ExpensesAdd.findAll()
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
      await ExpensesAdd.findAll({where : {id : req.params.id}})
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
            bill_print_id,
            ecat_id,
            vendor_id,
            expenses_title,
            with_quantity,
            quantity,
            rate,
            amount,
            file,
            description,
            date,
            year_id,
            user_id,
            status
            } = req.body
     await ExpensesAdd.create(
        {
            bill_print_id,
            ecat_id,
            vendor_id,
            expenses_title,
            with_quantity,
            quantity,
            rate,
            amount,
            file,
            description,
            date,
            year_id,
            user_id,
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
            bill_print_id,
            ecat_id,
            vendor_id,
            expenses_title,
            with_quantity,
            quantity,
            rate,
            amount,
            file,
            description,
            date,
            year_id,
            user_id,
            status
            } = req.body

         await ExpensesAdd.update(
         {
            bill_print_id,
            ecat_id,
            vendor_id,
            expenses_title,
            with_quantity,
            quantity,
            rate,
            amount,
            file,
            description,
            date,
            year_id,
            user_id,
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
    const resultId = await ExpensesAdd.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        ExpensesAdd.update(
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
//    await ExpensesAdd.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })

module.exports = router;