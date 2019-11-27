const express = require("express");
const app = express();
const port = process.env.port || 5000;
app.set('view-engine', 'ejs');
app.get('/', (req, res)=>{
    res.render('index.ejs');
});
app.get('/register', (req, res)=>{
    res.render('register.ejs');
});
app.get('/login', (req, res)=>{
    res.render('login.ejs');
});
app.listen(port, () => {
    console.log("server created");
});