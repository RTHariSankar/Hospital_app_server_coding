Make sure to install all the dependencies in the 'package.json' file before running the program.

*****************************************************************************************************************

SAMPLE JSON OBJECT FOR PERFORMING OPERATIONS:

{
  "name": "John Doe",
  "patientcount": 10,
  "location": "New York"
}

If the keys("name","patientcount","location") are not entered as the same as above in the 'POSTMAN Body',
the output results in additional object other than these three being updated.

ie, if "patientcount" is typed as "Patientcount" the output will be

{
  "name": "John Doe",
  "patientcount": 10,
  "location": "New York",
  "Patientcount" : 10
}

********************************************************************************************************************

PORT is 3000

********************************************************************************************************************

'hospital.json' is the server database

********************************************************************************************************************

'copy.json' is a copy of 'hospital.json'. If you need to start afresh in operations, 
you can copy the data from 'copy.json' to 'hospital.json' for a better view in results.

********************************************************************************************************************

REQUIRED URLs (camelCase is followed, so be attentive to that info)

GET method:  http://localhost:3000/hospital/showRecords

POST method: http://localhost:3000/hospital/createRecord

PUT method: http://localhost:3000/hospital/updateRecord/04

DELETE method: http://localhost:3000/hospital/deleteRecords/04


There are only 5 objects in 'hospital.json'. So the index in PUT, and DELETE should be between (0 to 4) or (00 to 04).
This value may change as per the number of data you add or delete to 'hospital.json' using POST method and DELETE method respectively.

**********************************************************************************************************************