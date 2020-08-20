const express = require('express');
//const path=require('path');
const Joi=require('joi');
const mongoose = require('mongoose'); 

const app=express();

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ 
	extended: true
}));

app.get('/signup',(req,res,next)=>{
    const data=req.body;

    const schema=Joi.validate.object()
});