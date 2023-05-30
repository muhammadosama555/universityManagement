const db =require('../models')


//Create main Model
const Student=db.students


//main work



//create product
const addStudent= async(req,res)=>{
    let info={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        dateOfBirth:req.body.dateOfBirth,
        emailAddress:req.body.dateOfBirth 
    }

    const student = await Student.create(info)
    res.status(200).send(student)
}


//Get All Products
const getAllStudents=async(req,res)=>{
    let students=await Student.findAll()
    res.status(200).json(students)
}
//Get Single Product
const getOneStudent=async(req,res)=>{
    let id =req.params.id
    let student=await Student.findOne({where:{id:id}})
    res.status(200).json(student)
}
//Update Single Product
const UpdateStudent=async(req,res)=>{
    let id =req.params.id
    let student=await Student.update(req.body,{where:{id:id}})
    res.status(200).json(student)
}

//Get Single Product
const deleteStudent=async(req,res)=>{
    let id =req.params.id
    await Student.destroy({where:{id:id}})
    res.status(200).json({
        message:'student deleted successfully'
    })
}


module.exports= {
    getAllStudents,getOneStudent,UpdateStudent,deleteStudent,addStudent
}