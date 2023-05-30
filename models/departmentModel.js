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
      allowNull: true,
      references: {
        model: 'Professors', // sequelize creates plural names
        key: 'id'
      }
    } 

      
    });
    
  
       // Create the foreign key relationship
Department.belongsTo(Professor, { foreignKey: 'head' });
  
return Department;
  };
  
