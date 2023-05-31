const express= require('express')
const { addDepartment, getAllDepartments, getOneDepartment, UpdateDepartment, deleteDepartment } = require('../controllers/departmentController')


const router=require('express').Router()


router.post('/addDepartment',addDepartment)
router.get('/',getAllDepartments)
router.get('/:id',getOneDepartment)
router.put('/:id',UpdateDepartment)
router.delete('/:id',deleteDepartment)


module.exports=router