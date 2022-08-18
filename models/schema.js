const mongoose=require('mongoose');
const schema=mongoose.Schema;

//creating data schema
const noteSchema=new schema({
    title:{
        type:String,
        require:true
    },
    note:{
        type:String,
        require:true,
    },
},{timestamps:true});

const note= mongoose.model('note',noteSchema);

//exporting the model

module.exports=note;