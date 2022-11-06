const http = require('http')
const express = require('express')
const app  = express()


const rotaProdutos = require('./routes/produtos')

const rotaPedidos = require('./routes/pedidos')
const morgan = require('morgan')


app.use(morgan('dev'))
app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);


app.use('/teste',(req,res,end) => {
  res.status(200).send({
    mensagem: 'ok,Deu certo'
  });
})


app.use((req,res,next) => {
  const erro = new Error('not found')
  erro.status = 404;
  next(erro)
})

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    return res.send({
      error: {
        mensagem: error.message
      }
    })
})

module.exports = app;