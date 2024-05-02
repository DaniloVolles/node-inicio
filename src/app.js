import express from 'express'

const app = express()

// Criar rota padrão ou raíz
app.get('/', (req, res) => {
// req de requisição e res de response
// quando chamarmos nossa rota padrão, queremos que ela nos responda
    res.send('Olá, Danilo!')
})

export default app