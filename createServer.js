const express=require('express');

const app=express();

app.get('/',(req,res)=>res.send('Home Page'));
app.get('/about',(req,res)=>{
    if(req.query.name){
        res.send(`About Page from ${req.query.name}`);
    }
    else{
        res.send(`About Page`);
    }
});
app.get('/contact',(req,res)=>res.send('Contact Page'));

app.listen(8000,()=>console.log("Server Started"));