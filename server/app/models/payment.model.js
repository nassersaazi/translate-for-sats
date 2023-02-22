module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payment", {
    amount: { //wallet balance
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  });

  return Payment;
};
