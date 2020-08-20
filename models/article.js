let mongoose=require('mongoose');

//Article Schema
let articleSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required :true
    }
});

let Article=module.exports=mongoose.model('Article',articleSchema);