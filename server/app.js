const express = require("express")
const cors = require('cors')
require('dotenv').config()



const App = express()
const PORT = process.env.PORT || 8000



App.use(cors())
App.use(express.json())



App.get('/', (req,res)=>{
    res.json({
        "success": "true"
    })
})



App.listen(PORT, ()=>{
    console.log(`Server Started @PORT: ${PORT}`)
})