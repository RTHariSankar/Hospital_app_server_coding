const express = require('express');
const routerDelete = express.Router();

const fs = require('fs');

// routerDelete.use(express.json());
// routerDelete.use(express.urlencoded({ extended: true }));

routerDelete.delete('/deleteRecords/:ind', (req, res) => {
  const index = req.params.ind;

  const data = JSON.parse(fs.readFileSync('hospital.json', 'utf8'));
  const deletedRecords = data.splice(index, 1);

  fs.writeFileSync('hospital.json', JSON.stringify(data));

  const response = {
    Record: deletedRecords,
    Message: 'Selected Records Deleted',
  };

  res.send(response);
});

module.exports = routerDelete;
