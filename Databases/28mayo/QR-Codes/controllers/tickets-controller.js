import { v4 as uuidv4 } from "uuid"
import { generateQR } from "../utils/qr.js"
import {
  obtenerTickets,
  crearTicket,
  obtenerTicketPorToken,
  marcarTicketComoUsado
} from "../models/tickets-model.js"

export const mostrarTickets = async (req, res, next) => {
  try {
    const tickets = await obtenerTickets()
    res.render("index", { tickets })
  } catch (error) {
    next(error)
  }
}

export const mostrarFormularioCrearTicket = (req, res) => {
  res.render("create")
}

export const crearNuevoTicket = async (req, res, next) => {
  try {
    const { nombre, email } = req.body
    const token = uuidv4()

    await crearTicket({ nombre, email, token })

    const url = `http://localhost:3000/validate/${token}`
    const qr = await generateQR(url)

    res.render("qr", { qr, token, url })
  } catch (error) {
    next(error)
  }
}

export const validarTicket = async (req, res, next) => {
  try {
    const { token } = req.params
    const ticket = await obtenerTicketPorToken(token)

    if (!ticket) {
      return res.status(404).render("validate", {
        titulo: "Ticket no válido",
        mensaje: "No existe ningún ticket con ese código."
      })
    }

    if (ticket.usada) {
      return res.status(409).render("validate", {
        titulo: "Ticket ya utilizado",
        mensaje: "Este ticket ya se ha validado anteriormente.",
        ticket
      })
    }

    await marcarTicketComoUsado(token)

    res.render("validate", {
      titulo: "Entrada válida",
      mensaje: "Entrada validada correctamente. Disfruta del evento.",
      ticket
    })
  } catch (error) {
    next(error)
  }
}
