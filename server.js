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
const departmentRouter=require('./routers/departmentRouter')
const enrollmentRouter=require('./routers/enrollmentRouter')
const courseAssignmentRouter=require('./routers/courseAssignmentRouter')
const departmentCourseRouter=require('./routers/departmentCourseRouter')



//use routers
app.use('/api/students',studentRouter)
app.use('/api/courses',courseRouter)
app.use('/api/professors',professorRouter)
app.use('/api/departments',departmentRouter)
app.use('/api/enrollments',enrollmentRouter)
app.use('/api/courseAssignments',courseAssignmentRouter)
app.use('/api/departmentCourses',departmentCourseRouter)

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