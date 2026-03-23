import { Cart } from '../models/cartModel.js'

// http-get метод
export const getAllCarts = async (req, res, next) => {
    try {
        const getAllCarts = await Cart.findAll() 
        res.status(200).json(getAllCarts)
    } catch (err) {
        next(err)
    }
}

// HTTP-post метод

export const createCart = async (req, res, next) => {
    try {
        const { quantity } = req.body

        const newCart = await Cart.create( {quantity} ) 
        res.status(201).json(newCart)
    } catch (err) {
        next(err)
    }
}

// GET-ONE метод

export const getOneCart = async (req, res, next) => {
    try {
        const { id } = req.params
        const onecart = await Cart.findOne({
            where: { id }
        })
        if (!onecart) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(onecart)
    } catch (err) {
        next(err)
    }
}

// HTTP-DELETE

export const deleteCart = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedCart = await Cart.destroy({
            where: { id }
        })
        if (!deletedCart) return res.status(404).json({message: "Нет такого id"})
        res.status(201).json({message: "Удалено"})
    } catch (err) {
        next(err)
    }
}

// HTTP-UPDATE метод

export const updateCart = async (req, res, next) => {
    try {
        const { id } = req.params
        const [updated] = await Cart.update(req.body, { where: { id } })
        if (!updated) return res.status(404).json({message: "id клиента не найден"})
        
            const cart = await Cart.findByPk(id)
            res.json(cart)
    }
    catch (err) {
        next(err)
    }
}