// ./db/queries.js - rev. 03

const pool = require('./pool');

// ============================
// Car Parts Queries
// ============================

// Fetch all car parts from the database
async function getAllCarParts() {
  try {
    console.log("Running query: SELECT * FROM car_parts");
    const { rows } = await pool.query('SELECT * FROM car_parts');
    return rows;
  } catch (error) {
    console.error('Error fetching car parts:', error);
    throw error;
  }
}

// Insert a new car part into the database
async function insertCarParts(part) {
  try {
    await pool.query('INSERT INTO car_parts (part) VALUES ($1)', [part]);
    console.log(`Car part '${part}' inserted successfully.`);
  } catch (error) {
    console.error('Error inserting car part:', error);
    throw error;
  }
}

// ============================
// Groceries Queries
// ============================

// Fetch all groceries from the database
async function getAllGroceries() {
  try {
    console.log("Running query: SELECT * FROM groceries");
    const { rows } = await pool.query('SELECT * FROM groceries');
    return rows;
  } catch (error) {
    console.error('Error fetching groceries:', error);
    throw error;
  }
}

// Insert a new grocery item into the database
async function insertGroceries(item) {
  try {
    await pool.query('INSERT INTO groceries (item) VALUES ($1)', [item]);
    console.log(`Grocery item '${item}' inserted successfully.`);
  } catch (error) {
    console.error('Error inserting grocery item:', error);
    throw error;
  }
}

module.exports = {
  getAllCarParts,
  insertCarParts,
  getAllGroceries,
  insertGroceries,
};
