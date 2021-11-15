const express = require('express');
const router = express.Router()

const Subject  = require('../models/subject');

router.get('/', async(req, res) => {
   try {
   await Subject.findAll()
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
      await Subject.findAll({where : {id : req.params.id}})
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
        const {name,
            major,
            teacher_id,
            sort_order,
            subject_type,
            status,
            year_id,
            } = req.body
     await Subject.create(
        {
            name : name,
            major : major,
            class : req.body.class,
            teacher_id: teacher_id,
            sort_order: sort_order,
            subject_type: subject_type,
            status : status,
            year_id : year_id,
        
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
    try {
    const {
            id,
            name,
            major,
            teacher_id,
            sort_order,
            subject_type,
            status,
            year_id
            } = req.body

               await Subject.update(
                    {
                        name : name,
                        major : major,
                        class : req.body.class,
                        teacher_id: teacher_id,
                        sort_order: sort_order,
                        subject_type: subject_type,
                        status : status,
                        year_id : year_id
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
    const resultId = await Subject.findAll({where : {id: req.params.id}});
    // const result  = await resultId.json()
    // console.log("result " , result)
    if(resultId.length < 1){
        res.send(' requested Id not found')
    } else {

        Subject.update(
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
//    awaits Subject.destroy(
//     {where:{id : req.params.id}})
//     .then(() => {
//         res.status(200).json({success:true, msg: "delete success"})
//     })
// })


module.exports= router;