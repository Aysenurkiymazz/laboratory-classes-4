const Product = require('../models/Product');
const statusCode = require('../constants/statusCode');


const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render('products', { products });
};


const getAddProductView = (req, res) => {
    res.render('add-product');
};


const addNewProduct = (req, res) => {
    const { name, description } = req.body;
    const newProduct = new Product(name, description);
    Product.add(newProduct);
    res.redirect('/products');  
};

const getProductView = (req, res) => {
    const { name } = req.params;
    const product = Product.findByName(name);
    if (product) {
        res.render('product', { product });
    } else {
        res.status(statusCode.FOUND).send('Product not found');  
    }
};


const deleteProduct = (req, res) => {
    const { name } = req.params;
    Product.deleteByName(name);
    res.status(statusCode.OK).json({ success: true });
};

module.exports = { getProductsView, getAddProductView, addNewProduct, getProductView, deleteProduct };
