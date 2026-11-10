const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully!');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB Connection Error:', error.message);
    });

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Connecty Backend!');
});