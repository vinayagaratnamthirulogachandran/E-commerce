const Product = require("../models/ProductModel");

// create products
exports.createProduct = async (req, res, next) =>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
};
 
exports.getAllProducts = async (req, res) =>{
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
};


exports.updateProduct = async (req, res) =>{
    let product = await Product.findById(req.params.id);
    if(!product){
           return res.status(500).json({
            success: false,
            message: "Product is not found with this id"
        })
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
}


// delete product
exports.deleteProduct = async(req, res) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product is not found with this id"
        })
    }

    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully"
    })
}

// get single product
exports.getSingleProduct = async(req, res, next) =>{
    const product = await Product.findById(req.params.id)

if(!product){
    return res.status(500).json({
        success: false,
        message: "Product is not found in this id"
    })
}

res.status(200).json({
    success: true,
    product
})
}

