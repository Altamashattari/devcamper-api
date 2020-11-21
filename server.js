const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const bootcamps = require('./routes/bootcamps');


// Load env vars
dotenv.config({
    path: './config/config.env'
});

// connect to Database
connectDB();

// Route Files
const app = express();

// Body Parser
app.use(express.json());

// DEV Logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} environment on PORT ${PORT}`.yellow.bold));


process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`.red);
    server && server.close(() => process.exit(1));
});