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

db.students= require('./studentModel.js')(sequelize,DataTypes)
db.courses= require('./Courses')(sequelize,DataTypes)
db.professors= require('./professorModel.js')(sequelize,DataTypes)
db.departments = require('./departmentModel')(sequelize,DataTypes);







db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes-resync done');
})

module.exports=db