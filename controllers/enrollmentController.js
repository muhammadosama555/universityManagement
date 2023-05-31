const db =require('../models')


//Create main Model
const Enrollment=db.enrollments


//main work



//create product
const enrolStudent= async(req,res)=>{
    let info={
        studentId:req.body.studentId,
        courseId:req.body.courseId,
        enrollmentDate:req.body.enrollmentDate
    }

    const enrollment = await Enrollment.create(info)
    res.status(200).send(enrollment)
}


//Get All Products
const getAllEnrollments=async(req,res)=>{
    let enrollments=await Enrollment.findAll()
    res.status(200).json(enrollments)
}
//Get Single Product
const getOneEnrollment=async(req,res)=>{
    let id =req.params.id
    let enrollment=await Enrollment.findOne({where:{id:id}})
    res.status(200).json(enrollment)
}
//Update Single Product
const UpdateEnrollment=async(req,res)=>{
    let id =req.params.id
    let enrollment=await Enrollment.update(req.body,{where:{id:id}})
    res.status(200).json(enrollment)
}

//Get Single Product
const deleteEnrollment=async(req,res)=>{
    let id =req.params.id
    await Enrollment.destroy({where:{id:id}})
    res.status(200).json({
        message:'student deleted successfully'
    })
}


module.exports= {
    enrolStudent,getAllEnrollments,getOneEnrollment,UpdateEnrollment,deleteEnrollment
}