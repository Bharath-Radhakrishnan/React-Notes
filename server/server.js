const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



mongoose.connect('mongodb://localhost:27017/noteDB', {useNewUrlParser: true, useUnifiedTopology: true});

const noteSchema = new mongoose.Schema({title:String,
content:String});

const Note = mongoose.model('Note',noteSchema);

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))



 app.get("/get-data",(req,res)=>
 Note.find({},function(err,notes){
   if(!err){
     res.json(notes);
   }else{
     console.log(err);
   }
 }));
app.post("/create",(req,res)=>{
  const note = new Note({title:req.body.title,
  content:req.body.content});
  note.save();
res.json({succes:'true'})
});
app.listen(5000,()=>console.log("listening"));
