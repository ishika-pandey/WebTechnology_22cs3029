const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  title: { type: String, enum: ['Mr', 'Mrs', 'Ms', 'Not prefer to say'] },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  countryCode: { type: Number, required: true },
  phone: { type: Number, required: true,unique:true },
  password: { type: String, required: true },
  agreement: { type: Boolean, default: false },
  register: { type: Boolean, default: false }
});

const Register = new mongoose.model("users_registration",userSchema);
module.exports = Register;