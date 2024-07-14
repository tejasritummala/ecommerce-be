var express = require('express')
var cors = require('cors')
const DBConnect = require('./config/db')
const productsRouter = require('./router/products')

var app = express()
app.use(cors({ origin: 'http://localhost:8080' }))
DBConnect()

app.use('/api/products', productsRouter)

app.listen(8000, () => {
  console.log("Server is listening to port 8000")
})
