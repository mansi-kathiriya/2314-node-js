const { productService } = require("../services");

// create Product
const createProduct = async (req, res) => {
    try {
        const reqBody = req.body;

        if(req.file){
            reqBody.product_image = req.file.filename;
        }else{
            throw new Error("Banner image is required!");
        }

        const productExists = await productService.getProductByName(reqBody.product_name);
        if (productExists) {
            throw new Error(`please add other Product this ${productExists.product_name} Product already created.`);
        }

        const Product = await productService.createProduct(reqBody);

        res.status(200).json({
            success: true,
            message: "Product create successfully!",
            data: { Product }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Product list
const getProductList = async (req, res) => {
    try {
        const getList = await productService.getProductList();
        res.status(200).json({
            success: true,
            message: "Get Product list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Product details by id
const getProductDetails = async (req, res) => {
    try {
        const getDetails = await productService.getProductById(
            req.params.productId
        )
        if (!getDetails) {
            throw new Error("Product not found!");
        }

        res.status(200).json({
            success: true,
            message: "Product details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Product

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("Product not found!")
        }

        await productService.updateDetails(productId, req.body);

        res.status(200).json({
            success: true,
            message: "Product details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Product

const deleteRecord = async (req, res) => {
    try {
        const productId = req.params.productId;

        const productExists = await productService.getProductById(productId);
        if (!productExists) {
            throw new Error("Product not found!")
        }

        await productService.deleteProduct(productId);

        res.status(200).json({
            success: true,
            message: "Product delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createProduct,
    getProductList,
    getProductDetails,
    updateProduct,
    deleteRecord
};