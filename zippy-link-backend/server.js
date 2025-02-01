const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); 
const urlRoutes = require('./routes/urlRoutes'); 

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());

//Routes
app.use('/', urlRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
