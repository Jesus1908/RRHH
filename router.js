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

router.post('/save', crud.save); 

router.get('/edit/:id', (req, res) => {
  conexion.query("SELECT * FROM empleados WHERE id = ?", [req.params.id], (error, results) => {
    if(error){
      throw error;
    }else{
      res.render('edit', { empleado: results[0]});
    }
  });
});

router.post('/update', crud.update);
module.exports = router;
