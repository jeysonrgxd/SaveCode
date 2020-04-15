const express = require("express")
const app = express()

// variable de entorno
const PORT = process.env.PORT || 3000;

// configuraciones
app.set("port", PORT)

// Middleware para leer json que envia el cliente
app.use(express.json())

// importamos la ruta
app.use(require('./routes'))

// iniciamos el server
app.listen(app.get('port'),(err)=>{
   if(!err){
      console.log(`Server run in port ${app.get('port')}`)
   }
})