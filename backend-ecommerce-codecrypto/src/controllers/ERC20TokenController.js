const ERC20TokenService = require("../services/ERC20TokenService");

const name = async (req, res) => {
    try {
      const name = await ERC20TokenService.name();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        name: name,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const symbol = async (req, res) => {
    try {
      const symbol = await ERC20TokenService.symbol();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        symbol: symbol,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const decimals = async (req, res) => {
    try {
      const decimals = await ERC20TokenService.decimals();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        decimals: decimals,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const totalSupply = async (req, res) => {
    try {
      const totalSupply = await ERC20TokenService.totalSupply();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        totalSupply: totalSupply,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const balanceOf = async (req, res) => {
    try {
      let balance = 0;
      if(req.params.address) {
        balance = await ERC20TokenService.balanceOf(req.params.address);
      }
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        balance: balance,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const transfer = async (req, res) => {
    try {
      const {addressTo, units} = req.body;
      const transfer = await ERC20TokenService.transfer(addressTo, units);
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        transfer: transfer,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const approve = async (req, res) => {
    try {
      const approve = await ERC20TokenService.approve();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        approve: approve,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const allowance = async (req, res) => {
    try {
      const allowance = await ERC20TokenService.allowance();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        allowance: allowance,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const transferFrom = async (req, res) => {
    try {
      const transferFrom = await ERC20TokenService.transferFrom();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        transferFrom: transferFrom,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const increaseAllowance = async (req, res) => {
    try {
      const increaseAllowance = await ERC20TokenService.increaseAllowance();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        increaseAllowance: increaseAllowance,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  const decreaseAllowance = async (req, res) => {
    try {
      const decreaseAllowance = await ERC20TokenService.decreaseAllowance();
      
      return res.status(200).send({
        message: "Mensaje enviado desde: controllers/ERC20TokenController.js",
        decreaseAllowance: decreaseAllowance,
      });
  
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = {
  name,
  symbol,
  decimals,
  totalSupply,
  balanceOf,
  transfer,
  approve,
  allowance,
  transferFrom,
  increaseAllowance,
  decreaseAllowance
};
