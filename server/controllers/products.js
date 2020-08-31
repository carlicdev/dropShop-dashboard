const Product = require('../models/product');

exports.get_all_products = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({products})
    } catch(err) {
        console.log(err);
    }

};

exports.get_single_product = (req, res) => {
    res.send('Hello from single_product');
};

exports.post_new_product = (req, res) => {
    res.send('Hello from post_product');
};

exports.delete_product = (req, res) => {
    res.send('Hello from delete_product');
};

exports.update_product = (req, res) => {
    res.send('Hello from update_product');
};

