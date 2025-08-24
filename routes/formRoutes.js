const express = require('express');
const router = express.Router();
const db = require('../db'); // Importing database connection

// Handle form submission
router.post('/', async (req, res) => {
    const { name, email, phone, message, tour_request } = req.body;
    console.log(req.body);

    const nameV = req.body.name || null;
    const emailV = req.body.email || null;
    const phoneV = req.body.phone || null;
    const messageV = req.body.message || null; // Get optional message
    const tourRequest = req.body.tour_request === 'on' ? true : null;

    try {
        // Insert data into the updated contacts table in MySQL
        const result = await db.execute(
            'INSERT INTO contacts (name, email, phone, message, tour_request) VALUES (?, ?, ?, ?, ?)',
            [nameV, emailV, phoneV, messageV, tourRequest]
        );

        console.log('Inserted Values:', [name, email, phone, message, tourRequest]);
        res.status(200).send('Form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error saving data to database: ' + error.message);
    }
});

module.exports = router;
