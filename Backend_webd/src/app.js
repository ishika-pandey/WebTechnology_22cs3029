const express =require("express");
const path=require("path");
const app =express();
const hbs=require("hbs");
require("./db/conn");

const port =process.env.port || 3000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
//const partials_path = path.join(__dirname,"../templates/partials");

//app.use("/images", express.static(path.join(__dirname, "/public")));
app.use(express.static(static_path));
// app.set("view engine","hbs")
// app.set("views",template_path);
// hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    res.sendFile("index.html")

});

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`)
    
});