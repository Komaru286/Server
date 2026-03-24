import { Order } from '../models/orderModel.js'
import { Router } from "express"
import { getAllOrders, createOrder, getOneOrder, deleteOrder, updateOrder, updateOrderStatus } from "../controlers/orderController.js"

const router = Router();

router.get('', getAllOrders)
router.post('', createOrder)
router.get('/:id', getOneOrder)
router.delete('/:id', deleteOrder)
router.put('/:id', updateOrder)
router.patch("/:id", updateOrderStatus)

export default router