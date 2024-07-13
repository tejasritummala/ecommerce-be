const express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(8000, () =>{
    console.log("Server is listening to port 8000")
})
