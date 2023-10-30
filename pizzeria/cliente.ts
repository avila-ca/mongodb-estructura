import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
    apellidos: {
        apellido1: { type: String, required: true },
        apellido2: { type: String, required: true }
    },
	direccion: { type: String, required: true },
    cp:{ type: Number, required: true },
    localidad: { type: String, required: true },
    provincia: { type: String, required: true },
    telefono: { type: Number, required: false },
    pedido:{
        id_pedido: {type: ObjectId, required: false },
        hora: { type: Date, required: true },
        productos: [{
            categoria: { type: String, required: true },
            nombre: { type: String, required: true },
            descripcion: { type: String, required: true },
            imagen: { type: String, required: true },
            cantidad: { type: String, required: true },
            precio:{ type: Number, required: true },
        }],
        precio_total: { type: Number, required: true },
        tienda: {
            id_tienda: { type: ObjectId, required: true },
            nombre: { type: String, required: true },
            telefono: { type: Number, required: true },
            direccion: { type: String, required: true },
        },
    },
    empleado:{
        nombre: { type: String, required: true },
        apellidos: {
            apellido1: { type: String, required: true },
            apellido2: { type: String, required: true }
        },
        nif: { type: String, required: true },
        telefono: { type: String, required: true },
        rol: { type: String, required: true },
    },
    fecha_hora: { type: Date, required: true },
});

export default clienteSchema;