const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.status(200).send({
    mensagem:'usando get dentro da rota de produtos'
  });
})

router.post('/',(req,res,next) => {
  
  const produto = {
    nome: req.body.nome,
    preco: req.body.preco
  }
  
  res.status(201).send({
    mensagem: 'Insere um produto',
    produtoCriado: produto
  })
})


router.patch('/',(req,res,next) => {
  res.status(201).send({
    mensagem: 'usando post na roda de produtos(patch)'
  })
})

router.delete('/',(req,res,next) => {
  res.status(201).send({
    mensagem: 'usando o delete na rota de produtos'
  });
});

router.get('/:id_produto',(req,res,next) => {
  const id = req.params.id_produto

  
  if(id === 'especial'){

  res.status(200).send({
    mesagem:'usando get de um produto exclusivo',
    id:id,
  });
  }else {
  res.status(200).send({
    mesagem:'usando get de um produto normal',
    id:id
  });
} 
})

module.exports = router;