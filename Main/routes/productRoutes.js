import { Router } from "express";
import { addProduct, deleteProduct, getProduct, singleProduct, updateProduct } from "../controllers/productControllers.js";
import upload from "../middlewires/uplodes.js";

const router = Router()

router.post('/add', upload.single('image'), addProduct)
router.get('/get',getProduct)
router.get('/single', singleProduct)
router.put('/edit',updateProduct)
router.delete('/delete',deleteProduct)

export default router