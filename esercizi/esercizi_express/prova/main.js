const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.redirect("/app.html");
})

app.get('/saluti', (req, res) => {
    res.send('Ciao Mondo!')
  })

app.get('/saluti/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`Ciao ${nome}!`);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})