import { Product } from '../models/productModel.js'

// http-get метод
export const getAllProducts = async (req, res, next) => {
    try {
        const getAllProducts = await Product.findAll() 
        res.status(200).json(getAllProducts)
    } catch (err) {
        next(err)
    }
}

// HTTP-post метод

export const createProduct = async (req, res, next) => {
    try {
        const { Name, price } = req.body

        const newProduct = await Product.create( {Name, price} ) 
        res.status(201).json(newProduct)
    } catch (err) {
        next(err)
    }
}

// GET-ONE метод

export const getOneProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const oneproduct = await Product.findOne({
            where: { id }
        })
        if (!oneproduct) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(oneproduct)
    } catch (err) {
        next(err)
    }
}

// HTTP-DELETE

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedProduct = await Product.destroy({
            where: { id }
        })
        if (!deletedProduct) return res.status(404).json({message: "Нет такого id"})
        res.status(201).json({message: "Удалено"})
    } catch (err) {
        next(err)
    }
}

// HTTP-UPDATE метод

export const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const [updated] = await Product.update(req.body, { where: { id } })
        if (!updated) return res.status(404).json({message: "id клиента не найден"})
        
            const product = await Product.findByPk(id)
            res.json(product)
    }
    catch (err) {
        next(err)
    }
}