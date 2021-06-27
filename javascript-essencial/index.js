const express = require("express")
const app = express()
const port = 5000

app.listen(port, error =>{
    if(error){console.log('aconteceu um error ' + error)}
    else{console.log('deu bom!')}
})