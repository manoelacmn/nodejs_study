const http = require('http')
const express = require('express')
const app  = express()


const rotaProdutos = require('./routes/produtos')

const rotaPedidos = require('./routes/pedidos')

app.use('/produtos',rotaProdutos);

app.use('/pedidos',rotaPedidos);


app.use('/teste',(req,res,end) => {
  res.status(200).send({
    mensagem: 'ok,Deu certo'
  });
})

module.exports = app;