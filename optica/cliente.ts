 import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	direccion: { type: String, required: true },
    telefono: { type: Number, required: false },
    fax: { type: Number, required: false },
    nif: { type: String, required: true }
});

export default clienteSchema;