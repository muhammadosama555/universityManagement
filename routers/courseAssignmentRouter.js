const express= require('express')
const { addCourseAssignment, getAllCourseAssignments, getOneCourseAssignment, updateCourseAssignment, deleteCourseAssignment } = require('../controllers/courseAssignmentController')


const router=require('express').Router()


router.post('/addCourseAssignment',addCourseAssignment)
router.get('/',getAllCourseAssignments)
router.get('/:id',getOneCourseAssignment)
router.put('/:id',updateCourseAssignment)
router.delete('/:id',deleteCourseAssignment)


module.exports=router