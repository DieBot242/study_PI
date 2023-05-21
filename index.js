const express = require('express')
const cors = require('cors')

const app = express()

//config json response
app.use(express.json())

//solve CORS
app.use(cors({credential: true, origin: 'http://localhost:3000'}))

//public folder for images
app.use(express.static('public'))

//routes
const UserRoutes = require('./routes/UserRoutes')
const CronogramaRoutes = require('./routes/CronogramaRoutes')

app.use('/users', UserRoutes)
app.use('/Cronograma', UserRoutes)

app.listen(5000)