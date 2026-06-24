import { Router } from "express";
import { addProduct, deleteProduct, getProduct, singleProduct, updateProduct } from "../controllers/productControllers.js";

const router = Router()

router.post('/add', addProduct)
router.get('/get',getProduct)
router.get('/single', singleProduct)
router.put('/edit',updateProduct)
router.delete('/delete',deleteProduct)

export default router