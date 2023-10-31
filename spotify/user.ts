import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id_user: { type: ObjectId, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
	nombre_user: { type: String, required: true },
    fecha_nac: { type: Date, required: true },
    sexo: { type: String, required: true },
    pais: { type: String, required: true },
    cp:{ type: Number, required: true },
    suscripcion: {
        fecha_inicio:{ type: Date, required: true },
        fecha_renovacion:{ type: Date, required: true },
        forma_pago_tarjeta: {
            num_tarjeta: {type: Number, required: true},
            mes: { type: Number, required: true }, 
            anyo: { type: Number, required: true }, 
            caducidad: { type: Date, required: true },
            codigo_seg: { type: Number, required: true }
        },
        pago: {
            num_orden:{ type: Number, required: true }, 
            fecha: { type: Date, required: true }, 
            total: { type: Number, required: true }
        },
    },
    playlist: {
        id_playlist: {type: ObjectId, required: false },
        titulo: {
            id_usr_insert: { type: String, required: true },
            id_cancion: { type: String, required: true },
            fecha_insercion: { type: Date, required: true },
        },
        num_canciones: { type: Number, required: true },
        fecha_creacion: { type: Date, required: true },
        eliminada: {
            es_eliminada: {type: Boolean, required: false },
            fecha_borrado: { type: Date, required: false },
        },
    },
    favoritos:{
        id_album: [{id_album: { type: ObjectId, required: true }}],
        id_cancion:[{id_cancion: { type: ObjectId, required: true }}],
        id_artista:[{id_artista: { type: ObjectId, required: true }}]
    }
});
export default userSchema;