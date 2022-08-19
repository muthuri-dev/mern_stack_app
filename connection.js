const express=require('express');
const mongoose=require('mongoose');
const PORT=8000;
const multer=require('multer');
const bodyParser=require('body-parser');
const mongoURL='mongodb://0.0.0.0/Notes';
const app=express();
const note=require('./models/schema');
const cors=require('cors');
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
app.use(cors());


//routes
app.get('/',function(req,res){
  res.json({
    message:'server is running',
  });
});

app.post('/create',function(req,res){
  const newNote = new note({
    title:req.body.title,
    note:req.body.note,
  });
  newNote.save();
  console.log(newNote);
});

app.get('/notes',function(req,res){
  note.find({}).then(function(foundNotes){
    res.json(foundNotes);
  }).catch(function(error){
    console.log('getting notes error:  ',error);
  });
})