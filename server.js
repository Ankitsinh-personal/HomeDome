var express=require("express"); 
var bodyParser=require("body-parser"); 
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/HomeDome'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
}) 

var app=express() 


app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
	extended: true
})); 

app.post('/sign_up', (req,res)=>{ 
//     var name = document.getElementById('name'); 
// 	var email =document.getElementById('email'); 
//     var pass = document.getElementById('password'); 
    
// 	var data = { 
// 		"name": name, 
// 		"email":email, 
// 		"password":pass
// 	} 
// db.collection('users').insertOne(data,function(err, collection){ 
//         if (err) throw err; 
//         alert("Registration Successfull");
// 		console.log("Record inserted Successfully"); 
			
// 	}); 
		
    // 	return res.redirect('index.html'); 
    alert("Working");
});   


app.get('/register',function(req,res){ 
	res.redirect('registration.html')
// res.set({ 
// 	'Access-control-Allow-Origin': '*'
// 	}); 
// return res.redirect('registration.html'); 
}).listen(3000) 


console.log("server listening at port 3000"); 
