import QRCode from "qrcode"

// convierte un texto en un qr

export const generateQR = async (text) => {
   return await QRCode.toDataURL(text)
}