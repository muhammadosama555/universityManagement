module.exports = (sequelize, DataTypes) => {
    const Professor = sequelize.define('Professor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Professor;
  };
  