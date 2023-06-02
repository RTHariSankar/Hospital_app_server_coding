const express = require('express');
const routerPut = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');


routerPut.use(bodyParser.json());

routerPut.put('/updateRecord/:id',(req,res)=>{

    const newEntry = req.body;
    console.log(newEntry)

    const id = parseInt(req.params.id,10);
    console.log(id)

    let data = [];
    const fileData = fs.readFileSync('hospital.json');
    data = JSON.parse(fileData);
    console.log(data)



    Object.assign(data[id], newEntry);
    fs.writeFileSync('hospital.json',JSON.stringify(data));

    const response = {
        
        Message : "Record updated successfully",

        Record: data
    };

    res.send(response);
    console.log(response)

});

module.exports = routerPut;