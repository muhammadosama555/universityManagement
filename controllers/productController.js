const db =require('../models')


//Create main Model
const Product=db.products
const Review=db.reviews

//main work



//create product
const addProduct= async(req,res)=>{
    let info={
        title:req.body.title,
        price:req.body.price,
        description:req.body.description,
        published:req.body.published ? req.body.published :false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}


//Get All Products
const getAllProducts=async(req,res)=>{
    let products=await Product.findAll()
    res.status(200).json(products)
}
//Get Single Product
const getOneProduct=async(req,res)=>{
    let id =req.params.id
    let product=await Product.findOne({where:{id:id}})
    res.status(200).json(product)
}
//Update Single Product
const UpdateProduct=async(req,res)=>{
    let id =req.params.id
    let product=await Product.update(req.body,{where:{id:id}})
    res.status(200).json(product)
}

//Get Single Product
const deleteProduct=async(req,res)=>{
    let id =req.params.id
    await Product.destroy({where:{id:id}})
    res.status(200).json({
        message:'product deleted successfully'
    })
}


module.exports= {
    getAllProducts,getOneProduct,UpdateProduct,deleteProduct,addProduct
}