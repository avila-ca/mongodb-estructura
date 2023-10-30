import dotenv from "dotenv";
import mongoose from "mongoose";
import gafasSchema from "./gafas";
import proveedorSchema from "./proveedor";
import clienteSchema from "./cliente";

dotenv.config();

const nameDB = process.env.DATABASE ?? "error";
const urlDB = process.env.MONGO_URI ?? "error";
const dbConnection = mongoose
	.connect(urlDB)
	.then(() => console.log(`${nameDB} database connected!`));

const gafas = mongoose.model("Gafa", gafasSchema);
const proveedor = mongoose.model("Proveedor", proveedorSchema);
const cliente = mongoose.model("Cliente", clienteSchema);

/*
gafas.create({
    "gafas_marca": "rayban", 
    "gafas_graduacion1":"23",
    "gafas_graduacion2":"44",
    "gafas_montura":"rigida",
    "gafas_tipo_montura":"vertical",
    "gafas_montura_color":"verde",
    "gafas_vidrio_color":"verde",
    "gafas_precio":"23"
});*/
		