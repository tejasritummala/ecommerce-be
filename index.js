var express = require('express');
var mongoose = require("mongoose");
const ProductsModel = require('./models/Products')

var app = express()

// Connect to MongoDB database e-dukhan
mongoose.connect('mongodb://127.0.0.1:27017/e-dukhan', {})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/api/products', async (req, res) => {
    try {
      const products = await ProductsModel.find({});
      res.json(products);
    } catch (err) {
      res.status(500).send(err);
    }
});

app.listen(8000, () =>{
    console.log("Server is listening to port 8000")
})
