const router = require('express').Router()

const CronogramaController = require('../controllers/CronogramaController')

//middlewares
const verifyToken = require('../helpers/verify-token')

router.post('/create', CronogramaController.create)
router.get("/", CronogramaController.getAll)
router.get('/myCronograma', verifyToken, CronogramaController.getAllUserCronogramas)
router.get('/myTarefas', verifyToken, CronogramaController.getAllUserTarefas)
router.get('/:id', CronogramaController.getTarefaById)

module.exports = router