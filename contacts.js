const express =require('express')
const router=express.Router()
const Contact=require('../numbers/contact')

router.get('/',async(req,res)=>{
    try{
        const contacts=await Contact.find()
        res.json(contacts)
    }
    catch(err){
        res.send('Error '+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id)
        res.json(contact)
    }
    catch(err){
        res.send('Error '+err)
    }
})

router.post('/',async(req,res)=>{
    const contact=new Contact({
        name: req.body.name,
        number: req.body.number
    })
    try{
        const a1=await contact.save()
        res.json(a1)
    }
    catch(err){
        res.send('error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id)
        contact.name=req.body.name;
        contact.number=req.body.number;
        const a1=await contact.save();
        res.json(a1)
    }
    catch(err){
        res.send('error')
    }
})



module.exports=router