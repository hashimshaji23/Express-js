import { Router } from "express";
import { addProduct, deleteProduct, getProduct, singleProduct, updateProduct } from "../controllers/productControllers.js";
// import upload from "../middlewires/uplodes.js";
import authChec from "../middlewires/authCheck.js";

const router = Router()

router.post('/add', authChec, addProduct)
router.get('/get', authChec, getProduct)
router.get('/single', singleProduct)
router.put('/edit',updateProduct)
router.delete('/delete',deleteProduct)


// router.post('/add', authChec, upload.single('image'), addProduct)


export default router