var express = require('express')
var cors = require('cors')
const DBConnect = require('./config/db')
const ProductsModel = require('./models/Products')

var app = express()
app.use(cors({ origin: 'http://localhost:8080' }))
DBConnect()

app.get('/api/products', async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    res.json(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(8000, () => {
  console.log("Server is listening to port 8000")
})
