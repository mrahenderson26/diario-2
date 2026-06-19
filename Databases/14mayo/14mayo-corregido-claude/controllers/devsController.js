import devs from "../models/model-devs.js";

const devsController = {
    listarDevs: (req, res) => {
        res.render('listar-dev', { devs })
    },
    mostrarDev: (req, res) => {
        res.render("mostrar-dev", { devs })
    }
};

export default devsController;

