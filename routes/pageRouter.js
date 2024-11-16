// ./routes/pageRouter.js - rev. 01

const { Router } = require('express');
const pageController = require('../controllers/pageController');

const pageRouter = Router();

// Route for the main page
pageRouter.get('/', pageController.mainPageGet);

// Routes for Car Parts
pageRouter.get('/carParts', pageController.getAllCarParts);
pageRouter.get('/carParts/create', pageController.createCarPart);
pageRouter.post('/carParts/create', pageController.createCarPartPost);

// Routes for Groceries
pageRouter.get('/groceries', pageController.getAllGroceries);
pageRouter.get('/groceries/create', pageController.createGroceries);
pageRouter.post('/groceries/create', pageController.createGroceriesPost);

module.exports = pageRouter;
