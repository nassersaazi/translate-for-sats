module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    balance: { //wallet balance
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  });

  return User;
};
