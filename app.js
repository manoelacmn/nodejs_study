const http = require('http')
const express = require('express')
const app  = express()
const rotaProdutos = require('./routes/produtos')
const rotaPedidos = require('./routes/pedidos')
const morgan = require('morgan')
const bodyParser = require('body-parser')


app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.use((req,res,next) => {
  res.header('Acess-Control-Allow-Origin','http://specificserver.com','*');
  res.header(
    'Acess-Control-header',
    'Origin,X-Requested,Content-Type,Accept,Authorization'
  )
  if(req.method === 'OPTIONS'){
    res.header('Acess-Control-Allow-methods','PUT,POST,PATCH,DELETE,GET')
    return res.status(200).send({});
  }
  next();
})

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