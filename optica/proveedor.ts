import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    direccion: { 
        calle: {type: String, require: true },
        numero:{type: String, require: true },
        planta: {type: String, require: false },
        puerta: {type: String, require: false },
        ciudad: {type: String, require: true },
        cp:{type: String, require: true },
        pais:{type: String, require: true }
    },
    telefono: { type: Number, require: true },
    email: { type: String, require: true },
    fax: { type: Number, require: true },
    nif: { type: String, require: true },
});

export default proveedorSchema;