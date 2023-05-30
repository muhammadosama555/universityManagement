const { professors } = require('./index');

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
        model: 'Professors', // It's the table name that the `head` object references
        key: 'id'
      }
    } 

      
    });
    
  Department.belongsTo(professors, { foreignKey: 'head' });

return Department;
  };
  
