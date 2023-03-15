const express=require("express");
let app=express();


// app.get("/",(req,res)=>{
//     res.json({message:'the default get request'})
// });


app.get("/products",(req,res)=>{
    res.json({message:'welcome to products request'})
});

let port=4040;
app.listen(port,()=>{
    console.log(`server listening the port no.${port}`);
});
