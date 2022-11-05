const http = require('http')
const express = require('express')
const app  = express()


app.use((req,res,end) => {
  res.status(200).send({
    mensagem: 'ok,Deu certo'
  });
})

module.exports = app;