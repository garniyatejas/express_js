const express=require("express");
const app=express();

// app.get("/",(req,res)=>{
//     res.json({message:"Welcome to defult get request"});
// })
app.get("/products",(req,res)=>{
    res.json({message:"Welcome to products get request"});
})


let port=3030;
app.listen(port,()=>{
    console.log(`server listening the port no.${port}`);
});