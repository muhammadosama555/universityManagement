// enrollmentModel.js

module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    enrollmentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
  });

  Enrollment.associate = (models) => {
    Enrollment.belongsTo(models.Student, { foreignKey: 'studentId' });
    Enrollment.belongsTo(models.Course, { foreignKey: 'courseId' });
  };

  return Enrollment;
};

  
  