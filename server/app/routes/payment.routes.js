module.exports = app => {
  const payments = require("../controllers/payment.controller.js");

  var router = require("express").Router();

  // Create a new payment
  router.post("/", payments.create);

  // Retrieve all payments
  router.get("/", payments.findAll);

  // Retrieve a single payment with id
  router.get("/:id", payments.findOne);


  app.use("/api/payments", router);
};
