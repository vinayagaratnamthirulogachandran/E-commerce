const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const user = require("../models/UserModel");

exports.isAuthenticatedUser = catchAsyncErrors(async(req, res, next) =>{
    const {token} = req.cookies;

    if(!token){
        return next(new ErrorHandler("please login for access this resources", 401));
    }

    const decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decodedData.id);
    next();
})