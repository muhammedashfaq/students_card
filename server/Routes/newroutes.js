const express = require("express")
const new_roues= express.Router()
const {addStudent,getStudentsDetails,getastudent} = require('../Controller/studentController') 


new_roues.post('/addStudentDetails',addStudent)

new_roues.get('/getStudentsdetails',getStudentsDetails)
new_roues.post('/getastudent/:id',getastudent)


module.exports =new_roues