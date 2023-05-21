const router = require('express').Router()

const CronogramaController = require('../controllers/CronogramaController')

router.post('/create', CronogramaController.create)

module.exports = router