const express = require('express');
const {getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct} = require('../controller/ProductController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(isAuthenticatedUser, createProduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").delete(deleteProduct);

router.route("/product/:id").get(getSingleProduct);

module.exports = router