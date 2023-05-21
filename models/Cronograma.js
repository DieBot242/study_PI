const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Cronograma = mongoose.model(
  "Cronograma",
  new Schema(
    {
      nomeTarefa: {
        type: String,
        required: true,
      },
      dificuldade: {
        type: String,
        required: true,
      },
      horasDisponiveis: {
        type: Number,
        required: true,
      },
      statusTarefa: {
        type: Boolean,
      },
      user: Object,
    },
    //cria duas colunas/collections no banco para data de criação e atualização
    { timestamps: true }
  )
)

module.exports = Cronograma;