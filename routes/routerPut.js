const express = require('express');
const routerPut = express.Router();
const fs = require('fs');

routerPut.put('/updateRecord/:id',(req,res)=>{

    const newEntry = req.body;
    const id = parseInt(req.params.id,10);

    let data = [];
    const fileData = fs.readFileSync('hospital.json');
    data = JSON.parse(fileData);


    Object.assign(data[id],newEntry);
    fs.writeFileSync('hospital.json',JSON.stringify(data));

    const response = {
        
        Message : "Record updated successfully",

        Record: data
    }

    res.send(response);
})

module.exports = routerPut;