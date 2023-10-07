const InvoiceService = require("../services/InvoiceService");

const createInvoice = async (req, res) => {
  try{
    const {enterpriseAddress, customerAddress, amount, date} = req.body;
    let created;
    if(enterpriseAddress && customerAddress && amount && date) {
      created = await InvoiceService.createInvoice(enterpriseAddress,customerAddress, amount, date);
    }

    return res.status(200).send({
      created
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const deleteInvoiceById = async (req, res) => {
  try{
    const {id} = req.params;
    let deleted;
    if(id) {
      deleted = await InvoiceService.deleteInvoiceById(id);
    }

    return res.status(200).send({
      deleted
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const getInvoiceById = async (req, res) => {
  try {
    const {id} = req.params;
    let invoice;
    if(id) {
       invoice = await InvoiceService.getInvoiceById(req.params.id);
    }

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/InvoiceController.js",
      invoice: invoice,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getInvoices = async (req, res) => {
  try {
    const invoices = await InvoiceService.getInvoices();

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/InvoiceController.js",
      invoices: invoices,
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getInvoices,
  getInvoiceById,
  createInvoice,
  deleteInvoiceById
};
