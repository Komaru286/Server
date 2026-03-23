import { Product } from '../models/productModel.js'
import { Router } from "express"
import { getAllProducts, createProduct, getOneProduct, deleteProduct, updateProduct } from "../controlers/productController.js"

const router = Router();

router.get('', getAllProducts)
router.post('', createProduct)
router.get('/:id', getOneProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

export default Router