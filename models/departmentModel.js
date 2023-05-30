const { professors } = require('.');
const Professor = require('./professorModel')

module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      head: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Professor', referencesKey: 'id'
      }
     
      
    });
    
  
return Department;
  };
  
