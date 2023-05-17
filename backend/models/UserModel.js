const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Please enter a name atleast 03 characters"],
        maxlength: [15, "Your name can not exceed more than 15 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email address"],
        validate: [validator.isEmail, "Please enter a valid email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        minlength: [8, "your password should be more than 8 characters"],
        select: false,
    },
    avatar: {
        public_id:{
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    role: {
        type: String,
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordTime: Date,
});

// hash password
userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 10);
});


// jwt token
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET_KEY, {
        expiresIn : process.env.JWT_EXPIRES
    });
};


module.exports = mongoose.model("User", userSchema);