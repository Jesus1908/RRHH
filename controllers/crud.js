const conexion = require('../database/db');

exports.list = (req, res) => {
  conexion.query("SELECT * FROM empleados", (error, results) => {
    if(error){
      console.log(error);
      res.status(500).send('Error al obtener los empleados');
    } else {
      res.render('index', {registros: results});
    }
  });
};

exports.save = (req, res) => {
  const { nombres, apellidos, dni, cargo, area, fechaIngreso } = req.body;
  
  conexion.query(`INSERT INTO empleados SET ?`, 
    { nombres, apellidos, dni, cargo, area, fechaIngreso }, 
    (error, results) => {
      if(error){
        console.log(error);
        res.status(500).send('Error al guardar el empleado');
      } else {
        res.redirect('/');
      }
  });  
};


