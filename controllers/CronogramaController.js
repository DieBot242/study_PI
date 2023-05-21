const Cronograma = require("../models/Cronograma");

//Helpers
const getToken = 
module.exports = class CronogramaController {
  static async create(req, res) {
    const { nomeTarefa, dificuldade, horasDisponiveis, status, } = req.body;


    //validations
    if (!nomeTarefa) {
      res.status(422).json({ message: "Nome da tarefa é obrigatório!" });
      return;
        }
    if (!dificuldade) {
      res.status(422).json({ message: "Dificuldade da tarefa é obrigatório!" });
      return;
        }
    if (!horasDisponiveis) {
      res.status(422).json({ message: "Horas disponiveís para estudo são obrigatórias!" });
      return;
        }
    if (!status) {
      res.status(422).json({ message: "Status de conclusão da tarefa é obrigatório!" });
      return;
        }
    }

    //Coletar dono da tarefa
    const token = getToken(req)

    
    //Cria uma nova tarefa.
    const Cronograma = new Cronograma({
        nomeTarefa,
        dificuldade,
        horasDisponiveis,
        status,
        user: {

        }
    })
};