module.exports = (sequelize, DataTypes) => {
    const CourseAssignments = sequelize.define('CourseAssignment', {
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      professorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // Add other columns as needed
    });
  
    CourseAssignments.associate = (models) => {
      CourseAssignments.belongsTo(models.Course, { foreignKey: 'courseId' });
      CourseAssignments.belongsTo(models.Professor, { foreignKey: 'professorId' });
    };
  
    return CourseAssignments;
  };
  