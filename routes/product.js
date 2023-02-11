const express= require('express')
const route=express.Router()
const db= require('../Product.js')
const CSVToJSON = require('csvtojson')

route.get("/list",(req,res)=>{
    console.log(db.find({},(err,list)=>{
          if(err) console.log(err)
          res.setHeader('Content-Type', 'application/json');
          const data = {"products":list}
          res.end(JSON.stringify(data));
    }))
})

route.post("/create",(req,res)=>{
    new db({...req.body,...{
        "product_client_id": "pci1",
        "product_consultant_id": "pci1"
    }}).save()
    res.send('created')
})

route.delete("/delete",(req,res)=>{
    const id='63ce48b3b306e67093548e4a'

    db.deleteOne({ _id : id },(err)=>{
        if(err) console.warn(err);
    });
    res.send('delete')
})


route.put("/edit",(req,res)=>{
    const id='63ce09aa3f7ef04cd819f78d'
    const json={
        product_name:'Aakash',
        product_extinguisher_type:'pet2',
        product_extinguisher_capacity:'pec1',
        product_manufactured_date:new Date(),
        product_due_date: new Date(),
        product_remarks:'pr1',
        product_client_id:'pci1',
        product_consultant_id:'pci1'
    }
    db.findOneAndUpdate({_id:id},json,{upsert: true}, function(err, doc){
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    })
})

route.delete("/multidelete",(req,res)=>{
    res.send('multidelete')
})

route.post("/import",(req,res)=>{
    const csvfile='data.csv'
    CSVToJSON()
    .fromFile(csvfile)
    .then(users => {
        console.log(users)
        //new db(users).save()
    })
    .catch(err => {
        console.log(err)
    })
    
    res.send('imported')
})

route.get("/export",(req,res)=>{
    res.send('export')
})

module.exports = route