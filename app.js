const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();


// Using Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS
// Allow all origins to access the server
app.use(cors({
    origin: true,
    credentials: true
}));

// Import all routes
const users = require('./routes/user');
const candidates = require('./routes/candidate');
const votes = require('./routes/vote');

app.use('/api/v1', users);
app.use('/api/v1', candidates);
app.use('/api/v1', votes);


module.exports = app;
