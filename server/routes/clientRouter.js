import { Client } from '../models/clientModel.js'
import { Router } from "express"
import { getAllClients, createClient, getOneClient, deleteClient, updateClient, updateClientStatus} from "../controlers/clientControler.js"

const router = Router();

router.get('', getAllClients)
router.get('/:id', getOneClient)
router.post('', createClient)
router.delete('/:id', deleteClient)
router.put('/:id', updateClient)
router.patch("/:id", updateClientStatus)

export default Router