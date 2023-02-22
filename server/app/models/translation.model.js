module.exports = (sequelize, Sequelize) => {
  const Translation = sequelize.define("translation", {
    title: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    language: {
      type: Sequelize.STRING,
      allowNull: false
    },
    details: {
      type: Sequelize.TEXT,
    },
  });

  return Translation;
};
