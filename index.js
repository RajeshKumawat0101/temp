const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({
    path:'./env',
})
const port = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send('hi this side rajesh');
})

app.get('/welcome',(req,res)=>{
    res.send('<h1>Welcome, this is interesting thing</h1>')
})

app.get('/login',(req,res)=>{
    res.send("<h2>please,login your account!!!</h2>")
})

app.listen(port,()=>{
    console.log(`app listing on http:localhost/${port}`);
})