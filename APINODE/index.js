
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const usuarioRouter = require('./routers/usuarioRouter.js');
app.use('/usuarios', usuarioRouter)




app.post('/hello', (req, res) => {
  res.send(req.body.nome);
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})