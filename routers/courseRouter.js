const express= require('express')
const { addCourse, getAllCourses, getOneCourse, UpdateCourse, deleteCourse } = require('../controllers/courseController')


const router=require('express').Router()


router.post('/addCourse',addCourse)
router.get('/',getAllCourses)
router.get('/:cid',getOneCourse)
router.put('/:cid',UpdateCourse)
router.delete('/:cid',deleteCourse)


module.exports=router