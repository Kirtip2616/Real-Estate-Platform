const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes'); 
const formRoutes = require('./routes/formRoutes'); 
const searchRoutes = require('./routes/searchRoutes');

 // Importing form routes
const app = express();

// Middleware to parse request bodies (Form Data)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', authRoutes);
app.use('/api', searchRoutes);
// Use the routes defined in the formRoutes file
app.use('/api/form', formRoutes);

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});