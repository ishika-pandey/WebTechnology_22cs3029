var express=require("express")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
const { localsAsTemplateData } = require("hbs")

const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/login1')
const db=mongoose.connection
db.on('error',()=> console.log("Error in Connecting to Database"))
db.once('open',()=> console.log("Connected to Database"))

app.post("/sign_up",(req,res) => {
    var title= req.body.title
    var firstname=req.body.firstname
    var lastname=req.body.lastname
    var code=req.body.code
    var phone=req.body.phone
    var password=req.body.password
    var agreement=req.body.agreement
    var register=req.body.register
    var button=req.body.button

    var data={
        "title":title,
        "firstname":firstname,
        "lastname":lastname,
        "code":code,
        "phone":phone,
        "password":password,
        "agreement":agreement,
        "register":register,
        "button":button
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Succesfully")
    })
    return res.redirect('register_successful.html')
})

app.get("/",(req,res) => {
    res.set({
        "Allow-acces-Allow-Origin":'*'
    })
    return res.redirect('login1.html')
}).listen(3000);

console.log("Listening on port 3000")