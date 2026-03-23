import { Client } from '../models/clientModel.js'

// http-get метод
export const getAllClients = async (req, res, next) => {
    try {
        const getAllClients = await Client.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllClients)
    } catch (err) {
        next(err)
    }
}

// HTTP-post метод

export const createClient = async (req, res, next) => {
    try {
        const { name, email, rating, bday } = req.body

        const newClient = await Client.create( {name, email, rating, bday} )
        res.status(201).json(newClient)
    } catch (err) {
        next(err)
    }
}

// GET-ONE метод

export const getOneClient = async (req, res, next) => {
    try {
        const { id } = req.params
        const oneclient = await Client.findOne({
            where: { id }
        })
        if (!oneclient) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(oneclient)
    } catch (err) {
        next(err)
    }
}

// HTTP-DELETE

export const deleteClient = async (req, res, next) => {
    try {
        const { id } = req.params
        const deletedClient = await Client.destroy({
            where: { id }
        })
        if (!deletedClient) return res.status(404).json({message: "Нет такого id"})
        res.status(201).json({message: "Удалено"})
    } catch (err) {
        next(err)
    }
}

// HTTP-UPDATE метод

export const updateClient = async (req, res, next) => {
    try {
        const { id } = req.params
        const [updated] = await Client.update(req.body, { where: { id } })
        if (!updated) return res.status(404).json({message: "id клиента не найден"})
        
            const client = await Client.findByPk(id)
            res.json(client)
    }
    catch (err) {
        next(err)
    }
}

// HTTP-PATCH метод

export const updateClientStatus = async (req, res, next) => {
    try {
        const { id } = req.params
        const { rating } = req.body
        
        const newRating = await Client.findByPk(id)
        if(!newRating) return res.status(404).json({message: "id клиента не найден"})
            newRating.rating = rating
        await newRating.save()
        res.json(newRating)
    }
    catch (err) {
        next(err)
    }
}