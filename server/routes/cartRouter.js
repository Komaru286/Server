import { Cart } from '../models/cartModel.js'
import { Router } from "express"
import { getAllCarts, createCart, getOneCart, deleteCart, updateCart } from "../controlers/cartController.js"

const router = Router();

router.get('', getAllCarts)
router.post('', createCart)
router.get('/:id', getOneCart)
router.delete('/:id', deleteCart)
router.put('/:id', updateCart)

export default Router