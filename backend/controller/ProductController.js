const Product = require("../models/ProductModel");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const Features = require("../utils/Features");

// create products
exports.createProduct = catchAsyncErrors(async (req, res, next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});

// get all products
 
exports.getAllProducts = catchAsyncErrors(async (req, res) =>{
    const resultPerPage = 2;
    const productCount = await Product.countDocuments();
    const feature = new Features(Product.find(),req.query).search().filter().pagination(resultPerPage);
    const products = await feature.query;
    res.status(200).json({
        success: true,
        products
    })
});

// update products

exports.updateProduct = catchAsyncErrors(async (req, res, next) =>{
    let product = await Product.findById(req.params.id);
    if(!product){
           return next(new ErrorHandler("Product is not found in this id", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
        useUnified: false
    });
    res.status(200).json({
        success: true,
        product
    })
})


// delete product
exports.deleteProduct = catchAsyncErrors(async(req, res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product is not found in this id", 404));
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
})

// get single product
exports.getSingleProduct = catchAsyncErrors(async(req, res, next) =>{
    const product = await Product.findById(req.params.id)

if(!product){
    return next(new ErrorHandler("Product is not found in this id", 404));
}

res.status(200).json({
    success: true,
    product,
    productCount
})
})

