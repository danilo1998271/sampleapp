const express = require('express');
const router = express.Router();

router.get('users/', (req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end()
}); 

router.get('/', (req, res)=>{
    res.send("ok")
}); 