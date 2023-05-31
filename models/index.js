const dbConfig=require('../config/db')

const {Sequelize,DataTypes}=require('sequelize')
const { pool } = require('../config/db')

const sequelize=new Sequelize(
    dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,
    {host:dbConfig.HOST,dialect:dbConfig.dialect,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle,
     }}
)

sequelize.authenticate()
.then(()=>{
    console.log('connected');
})
.catch((err)=>{
    console.log('Error'+err);
})

const db ={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.students= require('./studentModel')(sequelize,DataTypes)
db.courses= require('./courseModel')(sequelize,DataTypes)
db.professors= require('./professorModel')(sequelize,DataTypes)
db.departments=require("./departmentModel")(sequelize,DataTypes)
db.enrollments = require('./enrollmentModel')(sequelize, DataTypes);
db.courseAssignments = require('./courseAssignmentModel')(sequelize, DataTypes);
db.departmentcourses= require('./departmentCoursesModel')(sequelize, DataTypes);




db.sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });






module.exports=db