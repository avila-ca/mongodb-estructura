import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
    id_album: { type: ObjectId, required: true },
    titulo: { type: String, required: true },
    anyo_publi: { type: Date, required: true },
    imagen: { type: String, required: true },
    artista:  {
        nombre: { type: String, required: true },
        imagen: { type: String, required: true },
    },
    cancion: [{
        id_cancion: { type: ObjectId, required: true },
        titulo: { type: String, required: true },
        duracion: { type: Date, required: true },
        num_repr: { type: Number, required: true },
    }],
});
export default albumSchema;