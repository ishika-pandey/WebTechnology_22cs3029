const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/loginData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Create a schema for the login data
const loginSchema = new mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    countryCode: String,
    mobile: String,
    password: String,
    agreement: Boolean,
    register: Boolean
});

// Create a model based on the schema
const Login = mongoose.model('Login', loginSchema);

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle form submission
app.post('/register', async (req, res) => {
    try {
        // Create a new login document
        const login = new Login(req.body);
        // Save the login data to the database
        await login.save();
        res.status(201).send('Registration successful!');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
