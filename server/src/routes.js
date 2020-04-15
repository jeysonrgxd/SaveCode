// recordar crear los router por cada tabla que queramos consultar

const express = require("express")

// express router se una mas que todo para crear controladores de ruta modulares y montables
const router = express.Router()

router.get('/', (req,res)=>{
   res.send("Este es el servidor para la aplicacion")
})

module.exports = router