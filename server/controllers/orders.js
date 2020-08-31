
const Order = require('../models/order');
const User = require('../models/user');

exports.get_all_orders = async (req, res) => {
    try {
        const orders = await Order.find().populate('userId', 'username');
        res.status(200).json({orders});
    } catch(err) {
        console.log(err);
    }
}

exports.get_single_order = (req, res) => {
    res.send('hello from all orders');
}

exports.post_order = (req, res) => {
    res.send('hello from all orders');
}

exports.delete_order = (req, res) => {
    res.send('hello from all orders');
}

exports.update_order = (req, res) => {
    res.send('hello from all orders');
}