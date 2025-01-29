// import modules
import express from "express";
import displayProducts from "./database/databaseQueries.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


//Create backend server w/ express
const app = express()

app.use(cors());

// Middleware for parsing JSON request bodies
app.use(express.json());

// route to get product from api
app.get('sql5.freesqldatabase.com', async (req, res) => {
    try {
        const products = await displayProducts(); // Fetch products
        res.send(products); // Send the products as a obj response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})

//Hosts the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})