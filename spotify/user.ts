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
        }

    }
    video_publica: {
        id_video: {type: ObjectId, required: false },
        titulo: { type: String, required: true },
        descripcion: { type: String, required: true },
        tamanyo: { type: Number, required: true },
        nombre_archivo: { type: String, required: true },
        tiempo: { type: Date, required: true },
        thumbnail: { type: String, required: true },
        reproducciones_num:{ type: Number, required: true },
        likes: { type: Number, required: true },
        dislikes: { type: Number, required: true },
        estado: {
            publico: { type: Boolean, required: true },
            privado: { type: Boolean, required: true },
            oculto: { type: Boolean, required: true }
        },
        etiqueta: {
            id_etiqueta: { type: ObjectId, required: true },
            nombre:  { type: String, required: true },
        },
        comentarios: {
            id_comentario: {type: ObjectId, required: false },
            texto: {type: String, required: false },
            fecha_creacion: { type: Date, required: true },
            like: [{
                id_like: { type: ObjectId, required: true },
                fecha_cracion: { type: Date, required: true }
            }],
            dislike: [{
                id_dislike: { type: ObjectId, required: true },
                fecha_cracion: { type: Date, required: true }
            }]
        }
    },
    canal: {
        id_canal: {type: ObjectId, required: false },
        nombre: { type: String, required: true },
        descripcion: { type: String, required: true },
        fecha_creacion: { type: Date, required: true },
    },
    suscripcion_canal_id_canal: {type: ObjectId, required: false },
    playlist: {
        id_playlist: {type: ObjectId, required: false },
        nombre: { type: String, required: true },
        fecha_creacion: { type: Date, required: true },
        es_publica: { type: Boolean, required: true },
        videos_id: [{type: ObjectId, required: false }],
    }

});

export default userSchema;