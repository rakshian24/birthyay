import mongoose from "mongoose";
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    minLength: [2, "First name is shorter than the minimum length(2)"],
    maxLength: [15, "First name is longer than the maximum length(15)"],
  },
  lastName: {
    type: String,
    required: [true, 'LastName is required!'],
    minLength: [1, "First name is shorter than the minimum length(1)"],
    maxLength: [15, "First name is longer than the maximum length(15)"],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  dob: {
    type: Date,
    required: [true, 'Date is required!'],
  }
}, {
  timestamps: true
});

const User = mongoose.Model('user', userSchema);

export default User;
