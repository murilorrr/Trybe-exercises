'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fistName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  });
  return User;
};