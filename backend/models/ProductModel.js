const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter a name"],
        trip: true,
        maxlength: [20, "Product name can not exceed 20 characters"],
    },
    description: {
        type: String,
        required:[true, "Please add description"],
        maxlength: [4000, "Description is can not exceed 4000 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please add a price for your product"],
        maxlength: [8, "Price can not exceed 8 characters"],
    },
    discountprice: {
        type: Number,
        maxlength: [4, "discount price can not exceed 4 characters"],
    },
    catogery: {
        type: String,
        required: [true, "Please add catogery"],
    },
    size:{
        type: String,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [{
        public_id:{
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    }],
    stock: {
        type: Number,
        required: [true, "Please add some stock"],
        maxlength: [3, "Stock can not exceed 3 characters"],
    },
    numOfReview: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now(),
        },
    }],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model("product", productSchema);