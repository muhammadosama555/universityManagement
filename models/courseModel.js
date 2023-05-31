module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        cid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          credits: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    });
  
    
    return Course;
  };
  