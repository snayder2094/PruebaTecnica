const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const corsOptions = { origin: '*' }
dotenv.config();

// connect to db
mongoose.connect(
    process.env.MongoString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to db")
);

// import routes
const authRoutes = require("./routes/auth");
const apiRoute = require("./routes/api");
const verifyToken = require("./routes/validate-token");

// middlewares
app.use(express.json());

// route middlewares
app.use("/api/user", authRoutes);
app.use("/api/apiTwich", verifyToken, apiRoute);
app.use(cors(corsOptions));

app.listen(3000, () => console.log("server is running..."));