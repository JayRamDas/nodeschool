const express = require('express');
const Elibrary = require('../models/elibrary');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await Elibrary.findAll()
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
      await Elibrary.findAll({where : {id : req.params.id}})
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
            class_id,
            file_name,
            file_location,
            size,
            type,
            role,
            uploader,
            status
            } = req.body
     await Elibrary.create(
        {
            class_id,
            file_name,
            file_location,
            size,
            type,
            role,
            uploader,
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
            class_id,
            file_name,
            file_location,
            size,
            type,
            role,
            uploader,
            status
            } = req.body

         await Elibrary.update(
         {
            class_id,
            file_name,
            file_location,
            size,
            type,
            role,
            uploader,
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
    const resultId = await Elibrary.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        Elibrary.update(
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
//    await Elibrary.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })

module.exports = router;