const db =require('../models')


//Create main Model
const DepartmentCourses=db.departmentcourses


//main work



//create product
const addDepartmentCourse= async(req,res)=>{
    let info={
        departmentId:req.body.departmentId,
        courseId:req.body.courseId,
       
    }

    const departmentCourse = await DepartmentCourses.create(info)
    res.status(200).send(departmentCourse)
}


//Get All Products
const getAllDepartmentCourses=async(req,res)=>{
    let departmentcourses=await DepartmentCourses.findAll()
    res.status(200).json(departmentcourses)
}
//Get Single Product
const getOneDepartmentCourse=async(req,res)=>{
    let id =req.params.id
    let departmentcourse=await DepartmentCourses.findOne({where:{id:id}})
    res.status(200).json(departmentcourse)
}
//Update Single Product
const updateDepartmentCourse=async(req,res)=>{
    let id =req.params.id
    let departmentcourse=await DepartmentCourses.update(req.body,{where:{id:id}})
    res.status(200).json(departmentcourse)
}

//Get Single Product
const deleteDepartmentCourse=async(req,res)=>{
    let id =req.params.id
    await DepartmentCourses.destroy({where:{id:id}})
    res.status(200).json({
        message:'student deleted successfully'
    })
}


module.exports= {
   addDepartmentCourse,getAllDepartmentCourses,getOneDepartmentCourse,updateDepartmentCourse,deleteDepartmentCourse
}