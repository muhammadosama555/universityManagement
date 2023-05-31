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
        allowNull: false
      }
    });
  
    Department.associate = (models) => {
      Department.belongsTo(models.Professor, {
        foreignKey: 'head',
        as: 'HeadProfessor'
      });
    };
  
    return Department;
  };
  
  