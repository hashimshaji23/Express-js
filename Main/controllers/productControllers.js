import Product from "../model/product.js";

export const addProduct = async (req, res, next) => {
    try {

        const { name, des, price } = req.body

        if (!name) {
            console.log("name is required");
        } else {
            const newProduct = new Product({
                name, des, price
            })
            const saveUser = await newProduct.save()
            res.status(200).json({
                status: true,
                message: 'successfull',
                data: saveUser
            })
        }

    } catch (err) {
        console.log(err);
    }
}

export const getProduct = async (req, res, next) => {
    try {
        const listProduct = await Product.find();
        res.status(200).json({
            status: true,
            message: "successful",
            data: listProduct
        })
    } catch (err) {
        console.log(err)

    }
}


export const singleProduct = async (req, res, next) => {
    try {
        const { id } = req.body

        if (!id) {
            console.log("Id is required");

        }
        const product = await Product.findById(id)
        if (!product) {
            console.log("product not found");

        } else {
            res.status(200).json({
                status: true,
                message: "success",
                data: product
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        const { id, name, des, price } = req.body

        if (!id) {
            console.log("Id is required");

        }
        const product = await Product.findById(id)
        if (!product) {
            console.log("product not found");
        }
        const updatedData = {}
        if (name) updatedData.name = name
        if (des) updateProduct.des = des
        if (price) updateProduct.price = price

        const updatedproduct = await Product.findByIdAndUpdate(id, updatedData, {
            new: true,
        })
        res.status(200).json({
            status: true,
            message: "success",
            data: updateProduct
        })

    } catch (err) {
        console.log(err)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.body
        if (!id) {
            console.log("Id is required")
        }
        const deletedProduct = await Product.findByIdAndDelete(id)
        if (!deleteProduct) {
            console.log("product not found");
        } else {
            res.status(200).json({
                status: true,
                message: "success",
                data: deleteProduct
            })
        }
    } catch (err) {
        console.log(err)
    }
}

