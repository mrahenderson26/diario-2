export const authMiddleware = (req, res, next) => {
    const { usuario, password } = req.body;

    if (usuario === "admin" && password === "1234") {
        next()
    } else {
        res.send("No autorizado")
    }
}

