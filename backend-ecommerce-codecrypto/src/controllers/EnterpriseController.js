const EnterpriseService = require("../services/EnterpriseService");

const createEnterprise = async (req, res) => {
  try{
    const {enterpriseAddress, name} = req.body;
    let created;
    if(enterpriseAddress && name) {
      created = await EnterpriseService.createEnterprise(enterpriseAddress,name);
    }

    return res.status(200).send({
      created
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const deleteEnterpriseById = async (req, res) => {
  try{
    const {id} = req.params;
    let deleted;
    if(id) {
      deleted = await EnterpriseService.deleteEnterpriseById(id);
    }

    return res.status(200).send({
      deleted
    });

  } catch(error) {
    return res.status(500).json({ message: error });
  }
}

const getEnterpriseById = async (req, res) => {
  try {
    const {id} = req.params;
    let enterprise;
    if(id) {
       enterprise = await EnterpriseService.getEnterpriseById(req.params.id);
    }

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/user.js",
      enterprise: enterprise,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getEnterprises = async (req, res) => {
  try {

    const enterprises = await EnterpriseService.getEnterprises();

    return res.status(200).send({
      message: "Mensaje enviado desde: controllers/user.js",
      enterprises: enterprises,
    });

  } catch (error) {
    return res.status(500).json({ message: error });
  }
};



module.exports = {
  getEnterprises,
  getEnterpriseById,
  createEnterprise,
  deleteEnterpriseById
};
