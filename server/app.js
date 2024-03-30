const express = require("express")
const cors = require('cors')


const App = express()
const PORT = 8080



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