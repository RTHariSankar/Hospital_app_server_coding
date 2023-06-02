const express = require('express');
const exp = new express();


const morgan = require('morgan');
exp.use(morgan('dev'));


const hospitalGet = require('./routes/routerGet');
const hospitalPut = require('./routes/routerPut');
const hospitalPost = require('./routes/routerPost');
const hospitalDelete = require('./routes/routerDelete');


exp.use('/hospital',hospitalGet);
exp.use('/hospital',hospitalPut);
exp.use('/hospital',hospitalPost);
exp.use('/hospital',hospitalDelete);


require('dotenv').config();


const PORT = process.env.PORT;
exp.listen(PORT,()=>{console.log(`Server is listening on port ${PORT}`)});