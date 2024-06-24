const express = require('express');
const http = require("node:http");
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=>{
    console.log(`Server has been working in http://localhost:${PORT}`)
})