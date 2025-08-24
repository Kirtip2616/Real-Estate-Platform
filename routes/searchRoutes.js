const express = require('express');
const router = express.Router(); // Initialize the router
const db = require('../db'); // Import your database connection
const cors = require('cors');
router.use(cors());
// Search Properties Route
router.post('/search', async (req, res) => {
    const { location, minPrice, maxPrice, availability, type } = req.body;

    // Validate inputs
    if (!location || !minPrice || !maxPrice || !availability || !type) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Fetch filtered properties from the database
        const query = `
        SELECT * FROM properties
         WHERE location = ? AND price BETWEEN ? AND ? AND availability = ? AND type = ?
     `;
     const [results] = await db.execute(query, [location, minPrice, maxPrice, availability, type]);
     
        if (results.length === 0) {
            return res.status(404).json({ message: 'No properties found matching your criteria.' });
        }
        console.log('Search Results:', results);

        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

module.exports = router;  // Export the router
