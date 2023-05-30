const express =require("express")
const cors=require('cors')

const app=express()

const corOptions = {
    origin: 'https://localhost:8081'
}



//middlewares
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//mount routers
const studentRouter=require('./routers/studentRouter')
const courseRouter=require('./routers/courseRouter.js')
const professorRouter=require('./routers/professorRouter')



//use routers
app.use('/api/students',studentRouter)
app.use('/api/courses',courseRouter)
app.use('/api/professors',professorRouter)

//testing api
app.get('/',(req,res)=>{
    res.json({
        message:'hello world'
    })
})

const PORT = process.env.PORT || 8080

//server
app.listen(PORT,()=>{
    console.log('server is running');
})