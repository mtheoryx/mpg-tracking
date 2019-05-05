'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mpg = sequelize.define(
    'Mpg',
    {
      date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      odometer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fuel: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Mpg.associate = function(models) {
    // associations can be defined here
  };
  return Mpg;
};
