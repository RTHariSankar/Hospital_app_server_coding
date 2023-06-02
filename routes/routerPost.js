const express = require('express');
const routerPost = express.Router();
const fs = require('fs');

routerPost.post('/createRecord',(req,res)=>{
  
  const newEntry = req.body;
  const data = JSON.parse(fs.readFileSync('hospital.json'));


  data.push(newEntry);
  fs.writeFileSync('hospital.json',JSON.stringify(data));
  

  const response = {
    Message: 'New Record is added to Database',
    Records: data
  }

  res.send(response);

})

module.exports = routerPost;
