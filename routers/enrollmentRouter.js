const express= require('express')
const { getOneDepartment } = require('../controllers/departmentController')
const { enrolStudent, getAllEnrollments, getOneEnrollment, UpdateEnrollment, deleteEnrollment } = require('../controllers/enrollmentController')


const router=require('express').Router()


router.post('/enrolStudent',enrolStudent)
router.get('/',getAllEnrollments)
router.get('/:id',getOneEnrollment)
router.put('/:id',UpdateEnrollment)
router.delete('/:id',deleteEnrollment)


module.exports=router