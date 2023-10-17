const express = require('express')
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const EnterpriseRoutes = require("./src/routes/EnterpriseRoute");
const CustomerRoutes = require("./src/routes/CustomerRoute");
const ArticleRoutes = require("./src/routes/ArticleRoute");
const InvoiceRoutes = require("./src/routes/InvoiceRoute");
const TokenRoutes = require("./src/routes/ERC20TokenRoute");

app.use("/enterprises", EnterpriseRoutes);
app.use("/customers", CustomerRoutes);
app.use("/articles", ArticleRoutes);
app.use("/invoices", InvoiceRoutes);
app.use("/token", TokenRoutes);

app.listen(port);
console.log('API escuchando en el puerto ' + port);