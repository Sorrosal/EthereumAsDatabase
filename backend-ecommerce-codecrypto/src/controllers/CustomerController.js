const CustomerService = require("../services/CustomerService");

const createCustomer = async (req, res) => {
  try{
    const {customerAddress, name} = req.body;
    let created;
    if(customerAddress && name) {
      created = await CustomerService.createCustomer(customerAddress,name);
    }

    return res.status(200).send({
      created
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const deleteCustomerById = async (req, res) => {
  try{
    const {id} = req.params;
    let deleted;
    if(id) {
      deleted = await CustomerService.deleteCustomerById(id);
    }

    return res.status(200).send({
      deleted
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const getCustomerById = async (req, res) => {
  try {
    const {id} = req.params;
    let customer;
    if(id) {
      customer = await CustomerService.getCustomerById(req.params.id);
    }

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/CustomerController.js",
      customer: customer,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getCustomers = async (req, res) => {
  try {
    const customers = await CustomerService.getCustomers();

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/CustomerController.js",
      customers: customers,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  deleteCustomerById
};
