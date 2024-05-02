const express = require('express')
const app = express()
const port = 3000

// Criar rota padrão ou raíz
app.get('/', (req, res) => {
// req de requisição e res de response
// quando chamarmos nossa rota padrão, queremos que ela nos responda
    res.send('Olá, Danilo!')
})

// Escutar a porta padrão 3000
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})
