const express = require('express');
const BookStockTables = require('../models/bookStockTables');
const router = express.Router()


router.get('/', async(req, res) => {
   try {
   await BookStockTables.findAll()
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
      await BookStockTables.findAll({where : {id : req.params.id}})
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
            class_name,
            book_name,
            book_publication,
            book_writter,
            storage_location,
            status
            } = req.body
     await BookStockTables.create(
        {   
            class_name,
            book_name,
            book_publication,
            book_writter,
            storage_location,
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
            class_name,
            book_name,
            book_publication,
            book_writter,
            storage_location,
            status
            } = req.body

         await BookStockTables.update(
         {  
            class_name,
            book_name,
            book_publication,
            book_writter,
            storage_location,
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
        const resultId = await BookStockTables.findAll({where : {id: req.params.id}});
        // const result  = await resultId.json()
        // console.log("result " , result)
        if(resultId.length < 1){
            res.send(' Requested Id not found')
        } else {
    
            BookStockTables.update(
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
    //     await BookStockTables.destroy(
    //      {where:{id : req.params.id}})
    //      .then(() => {
    //          res.status(200).json({success:true, msg: "delete success"})
    //      })
    //  })
     
module.exports = router;