export const addProduct = async (req, res, next) => {
    try {

        const { name, des, price } = req.body

        if (!name) {
            console.log("name is required");
        } else {
            const newProduct = newProduct({
                name, des, price
            })
            const saveUser = await newProduct.save()
            res.status.(200).json({
                status: true,
                message: 'successfull',
                data: saveUser
            })
        }

    } catch (err) {
        console.log(err);
    }
}

// export const getProduct = async (req, res, next)=>{
//     try{
//         const listProduct = await product.find();
//         res.status(200).json({

//         })
//     }
// }