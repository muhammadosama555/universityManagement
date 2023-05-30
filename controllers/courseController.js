const db =require('../models')


//Create main Model
const Course=db.courses


//main work



//create product
const addCourse= async(req,res)=>{
    let info={
        name:req.body.name,
        description:req.body.description,
        credits:req.body.credits,
        
    }

    const course = await Course.create(info)
    res.status(200).send(course)
}


//Get All Products
const getAllCourses=async(req,res)=>{
    let courses=await Course.findAll()
    res.status(200).json(courses)
}
//Get Single Product
const getOneCourse=async(req,res)=>{
    let cid =req.params.cid
    let course=await Course.findOne({where:{cid:cid}})
    res.status(200).json(course)
}
//Update Single Product
const UpdateCourse = async (req, res) => {
    let cid = req.params.cid; // Make sure 'cid' is the correct parameter name
    let course = await Course.update(req.body, { where: { cid: cid } });
    res.status(200).json(course);
  }
  

//Get Single Product
const deleteCourse=async(req,res)=>{
    let cid =req.params.cid
    await Course.destroy({where:{cid:cid}})
    res.status(200).json({
        message:'course deleted successfully'
    })
}

module.exports={getAllCourses,addCourse,getOneCourse,deleteCourse,UpdateCourse}
