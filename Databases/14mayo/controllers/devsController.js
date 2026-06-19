import devs from "../models/model-devs.js";

const devsController = {
    listarDevs: (req, res) => {
        res.render('listar-devs', { devs })
    },
    mostrarDev: (req, res) => {
        res.send("mostrar-dev", { devs })
    }
};

export default devsController;