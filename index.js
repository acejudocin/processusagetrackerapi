// Connects to DB and starts server app
const app         = require('./app')    // Cargamos el fichero app.js con la configuración de Express
const config      = require('./config') // Cargamos la configuración global de la API
const MongoClient = require("mongodb")

MongoClient.connect(
    config.DB_URI,
    {
        poolSize: 10,
        wtimeout: 2500,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
)
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(config.port, () => {
            console.log(`API listening on port ${config.port}`)
        })
    })
