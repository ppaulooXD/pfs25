let carrosBd = [
    "Marea",
    "Uno",
    "206 SW",
    "Focus",
    "Mazda RX-7"
]

class HomeController {

    homeView(req, res) {
        res.render('index');
    }

    carrosView(req, res) {
        let horas = new Date().getHours();
        res.render('carros', {carrosRender: carrosBd, horasDia: horas});
    }
}

module.exports = HomeController;