const express= require('express')
const { addStudent, getAllStudents, getOneStudent, UpdateStudent, deleteStudent } = require('../controllers/studentController')

const router=require('express').Router()


router.post('/addStudent',addStudent)
router.get('/',getAllStudents)
router.get('/:id',getOneStudent)
router.put('/:id',UpdateStudent)
router.delete('/:id',deleteStudent)


module.exports=router