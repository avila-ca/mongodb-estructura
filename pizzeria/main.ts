import dotenv from "dotenv";
import mongoose from "mongoose";
import clienteSchema from "./cliente";

dotenv.config();

const nameDB = process.env.DATABASE ?? "error";
const urlDB = process.env.MONGO_URI ?? "error";
const dbConnection = mongoose
	.connect(urlDB)
	.then(() => console.log(`${nameDB} database connected!`));

    
const cliente = mongoose.model("Cliente", clienteSchema);
		