import mongoose from "mongoose";

const proveedorSchema = new mongoose.Schema({
	poveedor_nombre: { type: String, required: true },
	poveedor_direccion: { type: String, required: true },
    poveedor_telefono: { type: Number, required: false },
    poveedor_fax: { type: Number, required: false },
    poveedor_nif: { type: String, required: true }
});

export default proveedorSchema;