const express = require('express');
const HomeController = require('../controllers/homeController');

const router = express.Router();
const homeController = new HomeController();

router.get("/rota2", homeController.homeView);

module.exports = router;