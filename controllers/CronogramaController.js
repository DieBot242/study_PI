const Cronograma = require("../models/Cronograma");

//Helpers
const getToken = require("../helpers/get-token")
const getUserByToken = require("../helpers/get-user-by-token");
const ObjectId = require('mongoose').Types.ObjectId

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
    const user = await getUserByToken(token)
    
        //Cria uma nova tarefa.
        const Cronograma = new Cronograma({
            nomeTarefa,
            dificuldade,
            horasDisponiveis,
            statusTarefa,
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
            }
        })
        try {

            const newCronograma = await Cronograma.save()
            res.status(201).json({
                message: 'Tarefa criada com sucesso!',
                newCronograma,
            })

        } catch (error) {

            res.status(500).json({message: error})

        }

    }

    //resgata todas as tarefas
    static async getAll(req, res) {
        const Cronograma = await Cronograma.find().sort('-createdAt')

        res.status(200).json({
            Cronograma: Cronograma,
        })
    }

    //resgatar cronograma do usuario
    static async getAllUserCronogamas(req, res) {

        //get user from token
        const token = getToken(req)
        const user = await getUserByToken(token)

        const Cronograma = await Cronograma.find({'user._id': user._id}).sort('-createdAt')

        res.status(200).json({
            Cronograma,
        })
    }

    //resgatar tarefas do usuario
    static async getAllUserTarefas(req, res) {

        //get user from token
        const token = getToken(req)
        const user = await getUserByToken(token)

        const Cronograma = await Cronograma.find({'Tarefas._id': user._id}).sort('-createdAt')

        res.status(200).json({
            Cronograma,
        })
    }

    //resgatar tarefas via ID
    static async getTarefaById(req, res) {
        const id = req.params.id
        
        if(!ObjectId.isValid()) {
            res.status(422).json({ message: "ID inválido!" });
            return
         }
        
        const Tarefa = await Tarefa.findOne({_id: id})

        if(!Tarefa) {
            res.status(404).json({message: 'Tarefa não encontrada!'})
        }

        res.status(200).json({
            Tarefa: Tarefa,
        })
    }
}