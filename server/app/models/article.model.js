module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("article", {
    title: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    details: {
      type: Sequelize.TEXT,
    },
  });

  return Article;
};
