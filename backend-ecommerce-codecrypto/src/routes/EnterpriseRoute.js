const express = require("express");
const router = express.Router();
const EnterpriseController = require("../controllers/EnterpriseController");

router.get("/", EnterpriseController.getEnterprises);
router.get("/:id", EnterpriseController.getEnterpriseById);
router.post("/",EnterpriseController.createEnterprise);
router.delete("/:id", EnterpriseController.deleteEnterpriseById);

module.exports = router;
