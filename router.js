const express = require('express');
const router = express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud'); 

router.get('/', (req, res) => {
  conexion.query("SELECT * FROM empleados", (error, results) =>{
    if(error){
      throw error;
    }else{
      res.render('index', {registros: results  })
    }
  });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/delete/:id', (req, res) => {
  const idempleado = req.params.id;
  conexion.query("DELETE FROM empleados WHERE id = ?", [idempleado], (error, results) => {
    if(error){
      throw(error);
    }else{
      res.redirect('/');
    }
  });
});

router.post('/save', crud.save); 
module.exports = router;
