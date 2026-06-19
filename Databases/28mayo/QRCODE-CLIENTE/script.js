const button = document.getElementById("button")
const data = document.getElementById("data")
const qr = document.getElementById("qr")
button.addEventListener("click", crearQR)

function crearQR() {
    var qrcode = new QRCode(qr, {
        text: data.value,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}