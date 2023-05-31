const db =require('../models')


//Create main Model
const CourseAssignment=db.courseAssignments


//main work



//create product
const addCourseAssignment= async(req,res)=>{
    let info={
        courseId:req.body.courseId,
        professorId:req.body.professorId,
       
    }

    const courseAssignment = await CourseAssignment.create(info)
    res.status(200).send(courseAssignment)
}


//Get All Products
const getAllCourseAssignments=async(req,res)=>{
    let courseAssignments=await CourseAssignment.findAll()
    res.status(200).json(courseAssignments)
}
//Get Single Product
const getOneCourseAssignment=async(req,res)=>{
    let id =req.params.id
    let courseAssignment=await CourseAssignment.findOne({where:{id:id}})
    res.status(200).json(courseAssignment)
}
//Update Single Product
const updateCourseAssignment=async(req,res)=>{
    let id =req.params.id
    let courseAssignment=await CourseAssignment.update(req.body,{where:{id:id}})
    res.status(200).json(courseAssignment)
}

//Get Single Product
const deleteCourseAssignment=async(req,res)=>{
    let id =req.params.id
    await CourseAssignment.destroy({where:{id:id}})
    res.status(200).json({
        message:'course assignment deleted successfully'
    })
}


module.exports= {
    addCourseAssignment,getAllCourseAssignments,getOneCourseAssignment,deleteCourseAssignment,updateCourseAssignment
}