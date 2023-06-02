const express = require('express');
const routerGet = express.Router();
const fs = require('fs');


const data = JSON.parse(fs.readFileSync('hospital.json','utf8'));

routerGet.get('/showRecords',(req,res)=>{

    const response = {
        message: 'The Records are displayed below',

        Records: data
    };

    res.send(response);
});

module.exports = routerGet;