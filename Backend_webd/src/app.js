const express =require("express");
const path=require("path");
const app =express();
const hbs=require("hbs");
require("./db/conn");

const port =process.env.port || 3000;

const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));
app.use("/images", express.static(path.join(__dirname, "../public")));

app.get("/",(req,res)=>{
    res.sendFile("/C:\Users\Mayank bharti\Downloads\web d\Backend_webd\public\index.html");

});
app.get("/images",(req,res)=>{
    res.sendFile("/C:\Users\Mayank bharti\Downloads\web d\Backend_webd\public\images\home.jpg");

});
app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
    
});