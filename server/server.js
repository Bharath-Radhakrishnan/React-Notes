const express = require("express");


const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.get("/get-data",(req,res)=>res.json({name:"bob",
age:27}));
app.post("/create",(req,res)=>{
  console.log(req.body);
res.json({succes:'true'})
});
app.listen(5000,()=>console.log("listening"));
