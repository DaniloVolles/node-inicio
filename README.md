# Sobre
Esse projeto foi criado seguindo o tutorial do professor Edson Maia no Curso de Node JS no YouTube.
Curso de NodeJS = https://www.youtube.com/playlist?list=PLnex8IkmReXwCyR-cGkyy8tCVAW7fGZow

# Iniciar o Projeto

### Instalar o NodeJS
https://nodejs.org/en/download

### Criar o package.json
```
npm init -v
```

### Instalar o express 
O express é um framework minimalista para criação de APIs
```
npm install express --save
```

### Criar o arquivo app.js na pasta src
```
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

```
### Iniciar o servidor
```
node src/app.js
```

### Realizar alterações de código
Qualquer alteração de arquivo ou código só vai ter efeito no momento que pararmos o servidor e reiniciarmos a aplicação (```ctrl + C``` para parar e ```node src/app.js``` para (re)iniciar a aplicação)

### Nodemon
Não é fácil ficar reiniciando a aplicação o tempo todo para perceber as alterações de código. Nesse caso, a biblioteca nodemon nos ajuda a realizar as alterações e vê-las em tempo real no serviço ativo
```
// -D por que é uma dep de desenvolvimento, e não precisa ir para produção
npm install nodemon -D
```
Indicar a presença do nodemon no ```package.json```
```
"scripts": {
    "dev": "nodemon src/app.js"
    // outros parâmetros
}
```
Uma vez que você incluiu esse parâmetro no ```package.json```, para iniciar a aplicação utilizaremos agora o comando abaixo, que vai executar o nodemon ao mesmo tempo que executa a aplicação
```
// observe que o npm executa o 'dev' que está dentro do 'scripts'
npm run dev
```
Lembre-se: para aplicar alterações de código, basta salvar o arquivo (com a aplicação em andamento a partir do ```npm run dev```, é claro)


# Criar rotas Get e Refatorar código

### Criar arquivo /server.js
```
import app from './src/app.js'

const port = 3000

// Escutar a porta padrão 3000
app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})

```

### Ajustar o arquivo /src/app.js
```
import express from 'express'

const app = express()

// Criar rota padrão ou raíz
app.get('/', (req, res) => {
// req de requisição e res de response
// quando chamarmos nossa rota padrão, queremos que ela nos responda
    res.send('Olá, Danilo!')
})

export default app
```

- Essas alterações são referentes à modularização do código
- Basicamente nós dividimos o app.js em dois arquivos (gerando o ```server.js```)

### Alterar o script dev
Para que o nodemon possa ser utilizado agora, nós precisamos alterar o arquivo no package.js para ```server.js```
```
"scripts": {
    "dev": "nodemon server.js"
    // outros parâmetros
}
```

