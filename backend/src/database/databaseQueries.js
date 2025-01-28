import pool from "./connectionPool.js";
import dotenv from "dotenv";
dotenv.config();

async function displayProducts() {
    const connection = await pool.getConnection();
    try {
        // selects all products
        const [rows] = await connection.query(`SELECT * FROM products`);
        return rows;
    } catch (e) {
        console.error('Error getting products: ', e);
        throw e;
    } finally {
        connection.release();
    }
}

displayProducts();

export default displayProducts;