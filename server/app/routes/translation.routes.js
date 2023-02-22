module.exports = app => {
  const translations = require("../controllers/translation.controller.js");

  var router = require("express").Router();

  // Create a new translation
  router.post("/", translations.create);

  // Retrieve all translations
  router.get("/", translations.findAll);

  // Retrieve a single translation with id
  router.get("/:id", translations.findOne);


  app.use("/api/translations", router);
};
