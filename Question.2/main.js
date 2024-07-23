require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const ConnectDB = require("./connection/dbConnection");
const studentRoutes = require("./routes/studentRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3000;
const serverStart = async () => {
    try {
        await ConnectDB();
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
    }
};

serverStart();
