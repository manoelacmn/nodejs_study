const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
  res.status(200).send({
    mensagem:'retorna todos os pedidos '
  });
})

router.post('/',(req,res,next) => {
  const pedido = {
    id_produto: req.body.id_produto,
    quantidade : req.body.quantidade
  }
  res.status(201).send({
    mensagem: ' pedido foi criado',
    pedidoCriado: pedido 
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

router.get('/:id_pedido',(req,res,next) => {
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