const express = require("express");
const router = express.Router();
const ERC20TokenController = require("../controllers/ERC20TokenController");

router.get("/name", ERC20TokenController.name);
router.get("/symbol", ERC20TokenController.symbol);
router.get("/decimals", ERC20TokenController.decimals);
router.get("/totalSupply", ERC20TokenController.totalSupply);
router.get("/balanceOf",ERC20TokenController.balanceOf);

router.post("/transfer", ERC20TokenController.transfer);
router.post("/approve", ERC20TokenController.approve);
router.post("/allowance", ERC20TokenController.allowance);
router.post("/transferFrom", ERC20TokenController.transferFrom);
router.post("/increaseAllowance", ERC20TokenController.increaseAllowance);
router.post("/decreaseAllowance", ERC20TokenController.decreaseAllowance);

module.exports = router;
