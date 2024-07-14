const express = require('express')
const ProductsModel = require('../models/Products')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await ProductsModel.find({});
        res.json(products);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/:productId', async (req, res) => {
    try {
        const product = await ProductsModel.findOne({ productId: req.params.productId });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router; 
