module.exports = (sequelize, DataTypes) => {
    const DepartmentCourses = sequelize.define('DepartmentCourses', {
      departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    DepartmentCourses.associate = (models) => {
      DepartmentCourses.belongsTo(models.Department, { foreignKey: 'departmentId' });
      DepartmentCourses.belongsTo(models.Course, { foreignKey: 'courseId' });
    };
  
    return DepartmentCourses;
  };
  