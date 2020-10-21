herues = require('../data/heroes')

module.exports = {
    lista : (req, res) => {
        res.render('heroes', {heru : herues});
    },
    detalle : (req, res) => {
        let resultado = herues.find(function (heros) {
            return(heros.id == req.params.id)
        });
        res.render('detalle', {result : resultado});
    },
    resenia : (req, res) => {
        let ids = req.params.id - 1;
        console.log(ids);
        console.log(herues[ids].nombre);
        if (ids >= 0 && ids <= herues.length - 1) {
            res.render('detalleconresenia', {resultNombre : herues[ids].nombre, resultResenia : herues[ids].resenia});
        };
        
    }
}

