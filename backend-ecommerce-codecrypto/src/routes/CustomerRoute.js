const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.getCustomers);
router.get("/:id", CustomerController.getCustomerById);
router.post("/",CustomerController.createCustomer);
router.delete("/:id", CustomerController.deleteCustomerById);

module.exports = router;
