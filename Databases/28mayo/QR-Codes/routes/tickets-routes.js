import { Router } from "express"
import {
  mostrarTickets,
  mostrarFormularioCrearTicket,
  crearNuevoTicket,
  validarTicket
} from "../controllers/tickets-controller.js"

const router = Router()

router.get("/", mostrarTickets)
router.get("/create", mostrarFormularioCrearTicket)
router.post("/create", crearNuevoTicket)
router.get("/validate/:token", validarTicket)

export default router
