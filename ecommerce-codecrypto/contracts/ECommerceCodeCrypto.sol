// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ECommerceCodeCrypto {
    
    Customer[] public customers;
    Enterprise[] public enterprises;
    Article[] public articles;
    Invoice[] public invoices;
    
    struct Enterprise {
        address enterpriseAddress;
        string name;
    }

    struct Customer {
        address customerAddress;
        string name;
    }

    struct Article {
        uint id;
        address enterpriseAddress;
        string name;
        uint price;
        string picture;
    }

    struct Invoice {
        uint id;
        address enterpriseAddress;
        address customerAddress;
        uint amount;
        string date;
    }

    // ENTERPRISE //
    function createEnterprise (address _enterpriseAddress, string calldata _name ) external {
        Enterprise memory enterprise = Enterprise(_enterpriseAddress, _name);
        enterprises.push(enterprise);
    }

    function getEnterprises() public view returns (Enterprise[] memory) {
       return enterprises;
    }


    // CUSTOMER //
    function createCustomer (address _customerAddress, string calldata _name) external {
        Customer memory customer = Customer(_customerAddress, _name);
        customers.push(customer);
    }

    function getCustomers() public view returns (Customer[] memory) {
       return customers;
    }


    // INVOICE //
    function createInvoice (address _enterpriseAddress, address _customerAddress, uint _amount, string calldata _date ) external {
        Invoice memory invoice = Invoice(1,_enterpriseAddress, _customerAddress, _amount, _date);
        invoices.push(invoice);
    }

    function getInvoices() public view returns (Invoice[] memory) {
       return invoices;
    }


    // ARTICLE //
    function createArticle (address _enterpriseAddress, string calldata _name, uint _price, string calldata _picture ) external {
        Article memory article = Article(1,_enterpriseAddress, _name, _price, _picture);
        articles.push(article);
    }

    function getArticles() public view returns (Article[] memory) {
       return articles;
    }
}