const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../db'); // Import the MySQL connection
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        await pool.execute('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        // Respond with success message
        res.status(201).json({ message: 'Signup successful, redirecting to login...' });
    } catch (error) {
        res.status(500).json({ message: 'Account already exists', error: error.message });
    }
});
// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {

        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = rows[0];

       
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Successful login
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error.message);
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
});

module.exports = router;
