const db = require("../models");
const Translation = db.translations;
const Op = db.Sequelize.Op;

// Create and Save a new Translation
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Translation
  const translation = {
    title: req.body.title,
    details: req.body.details,
    language: req.body.language,
  };

  // Save Translation in the database
  Translation.create(translation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the translation."
      });
    });
};


// Retrieve all Translations from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Translation.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving translation."
      });
    });
};

// Find a single Translation with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Translation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Translation with id=" + id
      });
    });
};
