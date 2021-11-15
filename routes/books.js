const express = require('express');
const Books = require('../models/books');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await Books.findAll()
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
      await Books.findAll({where : {id : req.params.id}})
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
            subject_id,
            publisher,
            class_id,
            category_id,
            author,
            published_date
            } = req.body
     await Books.create(
        {   
            name,
            subject_id,
            publisher,
            class_id,
            category_id,
            author,
            published_date
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
            subject_id,
            publisher,
            class_id,
            category_id,
            author,
            published_date
            } = req.body

         await Books.update(
         {  
            name,
            subject_id,
            publisher,
            class_id,
            category_id,
            author,
            published_date
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
   await Books.destroy(
    {where:{id : req.params.id}})
    .then(() => {
        res.status(200).json({success:true, msg: "delete success"})
    })
})


// router.delete('/:id' , async(req, res) => {
//     try {
//         const resultId = await Books.findAll({where : {id: req.params.id}});
//         // const result  = await resultId.json()
//         // console.log("result " , result)
//         if(resultId.length < 1){
//             res.send(' Requested Id not found')
//         } else {
    
//             Books.update(
//                 {
//                     status : 1,
//                 },
    
//         {where:{id : req.params.id}})
//         .then(() => {
//             res.status(200).json({success:true, msg: "Delete success"})
//         })
//     }
//     } catch (error) {
//         res.status(400).json({success:false, error})
        
//     }
        
//     })
    
module.exports = router;