const express = require('express');
const bodyParser=require("body-parser"); 
const path=require('path');
const Joi=require('joi');//Data Validation
const mongoose = require('mongoose'); 
/*--Database Connection--*/
mongoose.connect('mongodb://localhost:27017/Home-Dome'); 
let db=mongoose.connection; 
const mongoOptions={useNewUrlParser:true};
/*--Checking Error in Database--*/
db.on('error',(err)=>{
    console.log(err);
});
db.once('open', function(callback){ 
	console.log("Database connection:ON"); 
});
/*--------------------------------------------------------*/
/*--Init App and loading static files--*/
const app=express();
app.use(bodyParser.json()); 
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/registration.html');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.get('/contact-us',(req,res)=>{
    res.sendFile(__dirname+'/contact-us.html');
});
app.get('/features',(req,res)=>{
    res.sendFile(__dirname+'/features.html');
});
app.get('/featured',(req,res)=>{
    res.sendFile(__dirname+'/featured.html');
});
app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/about-us.html');
});
app.get('/payment1',(req,res)=>{
    res.sendFile(__dirname+'/payment1.html');
});
app.get('/payment2',(req,res)=>{
    res.sendFile(__dirname+'/payment2.html');
});
app.get('/payment3',(req,res)=>{
    res.sendFile(__dirname+'/payment3.html');
});
app.get('/details1',(req,res)=>{
    res.sendFile(__dirname+'/details1.html');
});
app.get('/details2',(req,res)=>{
    res.sendFile(__dirname+'/details2.html');
});
app.get('/details3',(req,res)=>{
    res.sendFile(__dirname+'/details3.html');
});
app.get('/details4',(req,res)=>{
    res.sendFile(__dirname+'/details4.html');
});
app.get('/details5',(req,res)=>{
    res.sendFile(__dirname+'/details5.html');
});
app.get('/details6',(req,res)=>{
    res.sendFile(__dirname+'/details6.html');
});
app.get('/details7',(req,res)=>{ṭ
    res.sendFile(__dirname+'/details7.html');
});
app.get('/details8',(req,res)=>{
    res.sendFile(__dirname+'/details8.html');
});
app.get('/details9',(req,res)=>{
    res.sendFile(__dirname+'/details9.html');
});
/*--Registration--*/  
app.post('/signup', function(req,res){ 
    // const data = req.body;
     var name = req.body.name; 
     var email =req.body.email; 
     var pass = req.body.password; 
     var data = { 
         "Name": name, 
         "Email":email, 
         "Password":pass, 
     } 
 db.collection('Users').insertOne(data,function(err, collection){ 
         if (err)
         {
             window.alert(err);
         } 
         console.log("Successfully Registered");    
     }); 
     return res.sendFile(__dirname+'/login.html'); 
 }); 
 
/*----------------------------------------------------*/
/*---for payment---*/
app.post('/pricing1', function(req,res){ 
     var holder =req.body.holder;
     var card_number =req.body.card_number;
     var MM=req.body.MM;
     var YY=req.body.YY;
     var property_id="1";
     var property_name="aaa";
     var data1 = 
     { 
      "holder":holder,
      "card_number":card_number,
      "month":MM,
      "year":YY,
     }  
     db.collection('Payment').insertOne(data1,function(err, collection)   
     { 
         if (err)        
         { 
             console.log(err); 
         } 
         console.log("insert data into payment table");   
      });
 
     var data = 
     { 
        "holder":holder,
        "card_number":card_number,
        "property_id":property_id,
        "property_name":property_name,
     }
        db.collection('Buyer').insertOne(data,function(err, collection)   
            { 
                if (err)        
                { 
                    console.log(err); 
                } 
                console.log("insert holder name && p_id into buyer table");   
             });
     return res.sendFile(__dirname+'/index.html'); 
 });
 app.post('/pricing2', function(req,res){ 
    var holder =req.body.holder;
    var card_number =req.body.card_number;
    var MM=req.body.MM;
    var YY=req.body.YY;
    var property_id="2";
    var property_name="bbb";
    var data1 = 
    { 
     "holder":holder,
     "card_number":card_number,
     "month":MM,
     "year":YY,
    }  
    db.collection('Payment').insertOne(data1,function(err, collection)   
    { 
        if (err)        
        { 
            console.log(err); 
        } 
        console.log("insert data into payment table");   
     });

    var data = 
    { 
       "holder":holder,
       "card_number":card_number,
       "property_id":property_id,
       "property_name":property_name,
    } 
        db.collection('Buyer').insertOne(data,function(err, collection)   
           { 
               if (err)        
               { 
                   console.log(err); 
               } 
               console.log("insert holder name && p_id into buyer table");   
            });
   
    return res.sendFile(__dirname+'/index.html'); 
}); 
app.post('/pricing3', function(req,res){ 
    var holder =req.body.holder;
    var card_number =req.body.card_number;
    var MM=req.body.MM;
    var YY=req.body.YY;
    var property_id="3";
    var property_name="ccc";
    var data1 = 
    { 
     "holder":holder,
     "card_number":card_number,
     "month":MM,
     "year":YY,
    }  
    db.collection('Payment').insertOne(data1,function(err, collection)   
    { 
        if (err)        
        { 
            console.log(err); 
        } 
        console.log("insert data into payment table");   
     });

    var data = 
    { 
       "holder":holder,
       "card_number":card_number,
       "property_id":property_id,
       "property_name":property_name,
    } 
        db.collection('Buyer').insertOne(data,function(err, collection)   
           { 
               if (err)        
               { 
                   console.log(err); 
               } 
               console.log("insert holder name && p_id into buyer table");   
            });
   
    return res.sendFile(__dirname+'/index.html'); 
}); 

 /*-----------------------------------------------------*/
 app.listen(3000,()=>{
    console.log('PORT:3000 || Successfully Connected');
});
