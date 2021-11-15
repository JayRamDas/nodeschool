const express = require('express');
const Parent = require('../models/parent');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await Parent.findAll()
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
      await Parent.findAll({where : {id : req.params.id}})
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
     await Parent.create(
            req.body
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
         await Parent.update(
        req.body,
        {where:{id : req.body.id}}
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
    const resultId = await Parent.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' Requested Id not found')
    } else {

        Parent.update(
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
//    await Parent.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })

module.exports = router;