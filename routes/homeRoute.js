const express = require('express');
const HomeController = require('../controllers/homeController');

const router = express.Router();
const homeController = new HomeController();

router.get("/", homeController.homeView);
router.get("/carros", homeController.carrosView);

module.exports = router;