const express= require('express')
const { addProfessor, getAllProfessors, getOneProfessor, updateProfessor, deleteProfessor } = require('../controllers/professorController')


const router=require('express').Router()


router.post('/addProfessor',addProfessor)
router.get('/',getAllProfessors)
router.get('/:id',getOneProfessor)
router.put('/:id',updateProfessor)
router.delete('/:id',deleteProfessor)


module.exports=router