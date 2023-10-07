const express = require("express");
const router = express.Router();
const InvoiceController = require("../controllers/InvoiceController");

router.get("/", InvoiceController.getInvoices);
router.get("/:id", InvoiceController.getInvoiceById);
router.post("/",InvoiceController.createInvoice);
router.delete("/:id", InvoiceController.deleteInvoiceById);

module.exports = router;
