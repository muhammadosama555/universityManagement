const express= require('express')
const { addDepartmentCourse, getAllDepartmentCourses, getOneDepartmentCourse, updateDepartmentCourse, deleteDepartmentCourse } = require('../controllers/departmentCoursesController')


const router=require('express').Router()


router.post('/addDepartmentCourse',addDepartmentCourse)
router.get('/',getAllDepartmentCourses)
router.get('/:id',getOneDepartmentCourse)
router.put('/:id',updateDepartmentCourse)
router.delete('/:id',deleteDepartmentCourse)


module.exports=router