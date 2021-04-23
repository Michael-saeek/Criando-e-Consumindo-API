const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {    // criando uma rota para server o API
    // axios vai dentro do get
    // response é a resposta do axios mas tiramos o data de dentro do response
    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        return res.json(data)
    } catch (error) {
        console.error(error + ' Temos um error')
    }
  
 
})

app.listen('4567') // ouvindo nesta porta localhost ai

// usar no terminal o comando node server.js para começar a funcionar
