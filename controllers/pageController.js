// ./controllers/pageController.js - rev. 03

const { body, validationResult } = require('express-validator');
const db = require('../db/queries');

// Main page controller
exports.mainPageGet = (req, res) => {
  res.render('index', { title: 'Inventory App: Main Page' });
};

// ============================
// Car Parts Controller Methods
// ============================

exports.getAllCarParts = async (req, res) => {
  try {
    const parts = await db.getAllCarParts();
    res.render('carParts', { title: 'Car Parts', parts });
  } catch (error) {
    console.error('Error fetching car parts:', error);
    res.status(500).send('Error fetching car parts');
  }
};

exports.createCarPart = (req, res) => {
  res.render('carPartsCreate', { title: 'Create Car Part' });
};

exports.createCarPartPost = async (req, res) => {
  const { part } = req.body;
  try {
    await db.insertCarParts(part);
    res.redirect('/carParts');
  } catch (error) {
    console.error('Error creating car part:', error);
    res.status(500).send('Error creating car part');
  }
};

// ============================
// Groceries Controller Methods
// ============================

exports.getAllGroceries = async (req, res) => {
  try {
    const groceries = await db.getAllGroceries();
    res.render('groceries', { title: 'Groceries', groceries });
  } catch (error) {
    console.error('Error fetching groceries:', error);
    res.status(500).send('Error fetching groceries');
  }
};

exports.createGroceries = (req, res) => {
  res.render('groceriesCreate', { title: 'Create Grocery Item' });
};

exports.createGroceriesPost = async (req, res) => {
  const { item } = req.body;
  try {
    await db.insertGroceries(item);
    res.redirect('/groceries');
  } catch (error) {
    console.error('Error creating grocery item:', error);
    res.status(500).send('Error creating grocery item');
  }
};
