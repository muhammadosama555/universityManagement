const db =require('../models')


//Create main Model
const Professor=db.professors


//main work



//create product
const addProfessor= async(req,res)=>{
    let info={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        emailAddress:req.body.emailAddress 
    }

    const professor = await Professor.create(info)
    res.status(200).send(professor)
}


//Get All Products
const getAllProfessors=async(req,res)=>{
    let professors=await Professor.findAll()
    res.status(200).json(professors)
}
//Get Single Product
const getOneProfessor=async(req,res)=>{
    let id =req.params.id
    let professor=await Professor.findOne({where:{id:id}})
    res.status(200).json(professor)
}
//Update Single Product
const updateProfessor=async(req,res)=>{
    let id =req.params.id
    let professor=await Professor.update(req.body,{where:{id:id}})
    res.status(200).json(professor)
}

//Get Single Product
const deleteProfessor=async(req,res)=>{
    let id =req.params.id
    await Professor.destroy({where:{id:id}})
    res.status(200).json({
        message:'student deleted successfully'
    })
}


module.exports= {
    getAllProfessors,getOneProfessor,updateProfessor,deleteProfessor,addProfessor
}