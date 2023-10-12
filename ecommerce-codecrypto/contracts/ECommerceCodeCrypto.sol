// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ECommerceCodeCrypto {
    
    Customer[] public customers;
    Enterprise[] public enterprises;
    Article[] public articles;
    Picture[] public pictures;
    Invoice[] public invoices;

    uint nextIdEnterprise = 0;
    uint nextIdCustomer = 0;
    uint nextIdArticle = 0;
    uint nextIdPicture = 0;
    uint nextIdInvoice = 0;
    
    constructor() {
        setPicture("0", "0");
    }
    struct Enterprise {
        uint256 id;
        address enterpriseAddress;
        string name;
    }

    struct Customer {
        uint256 id;
        address customerAddress;
        string name;
    }

    struct Article {
        uint256 id;
        address enterpriseAddress;
        string name;
        uint256 price;
        uint256 idPicture;
    }

    struct Picture {
        uint256 id;
        string hashPicture;
        string path;
        
    }

    struct Invoice {
        uint256 id;
        address enterpriseAddress;
        address customerAddress;
        uint256 amount;
        string date;
    }

    // ENTERPRISE //
    function createEnterprise (address _enterpriseAddress, string calldata _name ) external {
        enterprises.push(Enterprise(nextIdEnterprise,_enterpriseAddress, _name));
        nextIdEnterprise++;
    }

    function getEnterprises() public view returns (Enterprise[] memory) {
       return enterprises;
    }

    function findIndexEnterprise(uint _id) internal view returns (uint) {
        for (uint i = 0; i < enterprises.length; i++) {
            if (enterprises[i].id == _id) {                
                return i;
            }
        }
        revert("Enterprise not found");
    }

    function updateEnterprise(uint _id, address  _enterpriseAddress, string memory _name) public {
        uint index =  findIndexEnterprise(_id);
            enterprises[index].enterpriseAddress = _enterpriseAddress;
            enterprises[index].name = _name;
       
    }
    
   function getEnterpriseById(uint _id) public view returns (uint, address , string memory) {
        uint index = findIndexEnterprise(_id);
        return (enterprises[index].id, enterprises[index].enterpriseAddress, enterprises[index].name);
    }
    
    function deleteEnterprise(uint _id) public {
        uint index = findIndexEnterprise(_id);
        delete enterprises[index];
    }

    // CUSTOMER //
    function createCustomer (address _customerAddress, string calldata _name) external {
        customers.push(Customer(nextIdCustomer,_customerAddress, _name));
        nextIdCustomer++;
    }

    function getCustomers() public view returns (Customer[] memory) {
       return customers;
    }

    function findIndexCustomer(uint _id) internal view returns (uint) {
        for (uint i = 0; i < customers.length; i++) {
            if (customers[i].id == _id) {                
                return i;
            }
        }
        revert("Customer not found");
    }

    function updateCustomer(uint _id, address  _customerAddress, string memory _name) public {
        uint index =  findIndexCustomer(_id);
            customers[index].customerAddress = _customerAddress;
            customers[index].name = _name;
       
    }
    
   function getCustomerById(uint _id) public view returns (uint, address , string memory) {
        uint index = findIndexCustomer(_id);
        return (customers[index].id, customers[index].customerAddress, customers[index].name);
    }
    
    function deleteCustomer(uint _id) public {
        uint index = findIndexCustomer(_id);
        delete customers[index];
    }

    // INVOICE //
    function createInvoice (address _enterpriseAddress, address _customerAddress, uint256 _amount, string calldata _date ) external {
        invoices.push(Invoice(nextIdInvoice,_enterpriseAddress, _customerAddress, _amount, _date));
        nextIdInvoice++;
    }

    function getInvoices() public view returns (Invoice[] memory) {
       return invoices;
    }

    function findIndexInvoice(uint _id) internal view returns (uint) {
        for (uint i = 0; i < invoices.length; i++) {
            if (invoices[i].id == _id) {                
                return i;
            }
        }
        revert("Invoice not found");
    }

    function updateInvoice(uint _id, address  _enterpriseAddress, address  _customerAddress, uint256 _amount, string memory _date) public {
        uint index =  findIndexInvoice(_id);
            invoices[index].enterpriseAddress = _enterpriseAddress;
            invoices[index].customerAddress = _customerAddress;
            invoices[index].amount = _amount;
            invoices[index].date = _date;
    }
    
   function getInvoiceById(uint _id) public view returns (uint, address, address, uint256, string memory) {
        uint index = findIndexEnterprise(_id);
        return (invoices[index].id, invoices[index].enterpriseAddress, invoices[index].customerAddress, invoices[index].amount, invoices[index].date);
    }
    
    function deleteInvoice(uint _id) public {
        uint index = findIndexInvoice(_id);
        delete invoices[index];
    }

    // ARTICLE //
    function createArticle (address _enterpriseAddress, string calldata _name, uint256 _price, uint256 _idPicture ) external {
        articles.push(Article(nextIdArticle,_enterpriseAddress, _name, _price, _idPicture));
        nextIdArticle++;
    }

    function getArticles() public view returns (Article[] memory) {
       return articles;
    }

    function findIndexArticle(uint _id) internal view returns (uint) {
        for (uint i = 0; i < articles.length; i++) {
            if (articles[i].id == _id) {                
                return i;
            }
        }
        revert("Article not found");
    }

    function updateArticle(uint _id, address _enterpriseAddress, string calldata _name, uint256 _price, uint256 _idPicture) public {
        uint index =  findIndexArticle(_id);
            articles[index].enterpriseAddress = _enterpriseAddress;
            articles[index].name = _name;
            articles[index].price = _price;
            articles[index].idPicture = _idPicture;
    }
    
   function getArticleById(uint _id) public view returns (uint, address, string memory, uint256, uint256) {
        uint index = findIndexArticle(_id);
        return (articles[index].id, articles[index].enterpriseAddress, articles[index].name, articles[index].price, articles[index].idPicture);
    }
    
    function deleteArticle(uint _id) public {
        uint index = findIndexArticle(_id);
        delete articles[index];
    }

    function setPicture(string memory _hashPicture, string memory _path) public {
        pictures.push(Picture({
            id: nextIdPicture,
            hashPicture: _hashPicture,
            path: _path
        }));
        ++nextIdPicture;
    }

    function getHashPicture(uint _idPicture) public view returns (string memory) {
        return pictures[_idPicture].hashPicture;
    }

    function getPathPicture(uint _idPicture) public view returns (string memory) {
        return pictures[_idPicture].path;
    }
}