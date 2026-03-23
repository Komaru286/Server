import { Order } from '../models/orderModel.js'

// http-get метод
export const getAllOrders = async (req, res, next) => {
    try {
        const getAllOrders = await Order.findAll() 
        res.status(200).json(getAllOrders)
    } catch (err) {
        next(err)
    }
}

// HTTP-post метод

export const createOrder = async (req, res, next) => {
    try {
        const { status, date, totalPrice } = req.body

        const newOrder = await Order.create( {status, date, totalPrice} ) 
        res.status(201).json(newOrder)
    } catch (err) {
        next(err)
    }
}

// GET-ONE метод

export const getOneOrder = async (req, res, next) => {
    try {
        const { id } = req.params
        const oneorder = await Order.findOne({
            where: { id }
        })
        if (!oneorder) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(oneorder)
    } catch (err) {
        next(err)
    }
}

// HTTP-DELETE

export const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedOrder = await Order.destroy({
            where: { id }
        })
        if (!deletedOrder) return res.status(404).json({message: "Нет такого id"})
        res.status(201).json({message: "Удалено"})
    } catch (err) {
        next(err)
    }
}

// HTTP-UPDATE метод

export const updateOrder = async (req, res, next) => {
    try {
        const { id } = req.params
        const [updated] = await Order.update(req.body, { where: { id } })
        if (!updated) return res.status(404).json({message: "id клиента не найден"})
        
            const order = await Order.findByPk(id)
            res.json(order)
    }
    catch (err) {
        next(err)
    }
}

// HTTP-PATCH метод

export const updateOrderStatus = async (req, res, next) => {
    try {
        const { id } = req.params
        const { status } = req.body
        
        const newStatus = await Order.findByPk(id)
        if(!newStatus) return res.status(404).json({message: "id клиента не найден"})
            newStatus.status = status
        await newStatus.save()
        res.json(newStatus)
    }
    catch (err) {
        next(err)
    }
}