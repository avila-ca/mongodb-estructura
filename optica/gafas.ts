import mongoose from "mongoose";
const gafasSChema = new mongoose.Schema({

    gafas_marca: { type: String, required: true },
    gafas_graduacion1:{ type: Number, required: true },
    gafas_graduacion2:{ type: Number, required: true },
    gafas_montura:{ type: String, required: true },
    gafas_tipo_montura:{ type: String, required: true },
    gafas_montura_color:{ type: String, required: true },
    gafas_vidrio_color:{ type: String, required: true },
    gafas_precio:{ type: Number, required: true },

});
export default gafasSChema;