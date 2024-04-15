const express =require("express");
const path=require("path");
const app =express();
const hbs=require("hbs");
require("./db/conn");
const Register = require("./models/user_register");

//const { register } = require("module");
const port =process.env.port || 3000;
const staticPath = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath));

// app.listen(port, () => {
//     console.log(`Server is running at port ${port}`);
// });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/Register", (req, res) => {
    res.sendFile(path.join(__dirname, "../models/user_register.js"));
});

app.post("/Register", async(req, res) => {
    try{
        const registers = new Register({
            title:req.body.title,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            countryCode:req.body.countryCode,
            phone:req.body.phone,
            password:req.body.password,
            email:req.body.email
           
        })
        const registered = await registers.save();
        res.status(201).sendFile(path.join(__dirname, "../public/products.html"));

    }catch(error){
        res.status(400).send(error);
    }

})
app.get("/verify-email", async (req, res) => {
    const email = req.query.email;

    try {
        const isEmailRegistered = await Register.exists({ email });
        if (isEmailRegistered) {
            res.json({ redirectTo: '../new_product.html' }); // Redirect to register page if email is registered
        } else {
            res.json({ redirectTo: '../register.html' }); // Redirect to products page if email is not registered
        }
    } catch (error) {
        console.error('Error verifying email:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});



app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});

