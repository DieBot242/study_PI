const Cronograma = require("../models/Cronograma");

//Helpers
const getToken = require("../helpers/get-token")
const getUserByTOken = require("../helpers/get-user-by-token")

module.exports = class CronogramaController {
    // Criar Cronograma
  static async create(req, res) {
    const { nomeTarefa, dificuldade, horasDisponiveis, statusTarefa, } = req.body;


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
    if (!statusTarefa) {
      res.status(422).json({ message: "Status de conclusão da tarefa é obrigatório!" });
      return;
        }

    //Coletar dono da tarefa
    const token = getToken(req)
    const user = getUserByToken(token)
    
        //Cria uma nova tarefa.
        const Cronograma = new Cronograma({
            nomeTarefa,
            dificuldade,
            horasDisponiveis,
            status,
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
            }
        })
        try {

            const 

        } catch (error) {

            res.status(500).json({message: error})

        }

    }
}