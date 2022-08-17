const mongoose=require('mongoose');
const schema=mongoose.Schema;

//creating data schema
const userSchema=new schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:4,
    }
},{timestamps:true});

const user= mongoose.model('user',userSchema);

//exporting the model

module.exports=user;