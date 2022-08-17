const express=require('express');
const mongoose=require('mongoose');
const PORT=8000;
const multer=require('multer');
const bodyParser=require('body-parser');
const mongoURL='mongodb://0.0.0.0/mern-data';
const app=express();
const user=require('./models/schema');
//connecting to the database and server
mongoose.connect(mongoURL).then(function(){
  app.listen(PORT,function(error){
    if(error){
      console.log('server error:  ',error);
    }else{
      console.log(`AApp connected to port ${PORT} and local database`);
    }
  });
}).catch(function(err){
  console.log('error:  ',err);
});
                         
//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(cors());


//routes
app.get('/',function(req,res){
  res.json({
    message:'server is running',
  });
})