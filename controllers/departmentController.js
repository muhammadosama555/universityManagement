const db =require('../models')


//Create main Model
const Department=db.departments


//main work



//create product
const addDepartment= async(req,res)=>{
    let info={
        name:req.body.name,
        head:req.body.head
    }

    const department = await Department.create(info)
    res.status(200).send(department)
}


//Get All Products
const getAllDepartments=async(req,res)=>{
    let departments=await Department.findAll()
    res.status(200).json(departments)
}
//Get Single Product
const getOneDepartment=async(req,res)=>{
    let id =req.params.id
    let department=await Department.findOne({where:{id:id}})
    res.status(200).json(department)
}
//Update Single Product
const UpdateDepartment=async(req,res)=>{
    let id =req.params.id
    let department=await Department.update(req.body,{where:{id:id}})
    res.status(200).json(department)
}

//Get Single Product
const deleteDepartment=async(req,res)=>{
    let id =req.params.id
    await Department.destroy({where:{id:id}})
    res.status(200).json({
        message:'student deleted successfully'
    })
}


module.exports= {
    addDepartment,getAllDepartments,getOneDepartment,UpdateDepartment,deleteDepartment
}