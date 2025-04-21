const conexion = require('../database/db');

exports.save = (req,res) => {
  const nombres = req.body.nombres;
  const apellidos = req.body.apellidos;
  const dni= req.body.dni;
  const cargo= req.body.cargo;
  const area= req.body.area;
  const fechaIngreso= req.body.fechaIngreso;

  conexion.query(`INSERT INTO empleados SET ?`,
    { nombres: nombres, apellidos:apellidos, dni:dni,
      cargo: cargo, area: area, fechaIngreso:fechaIngreso
     },(error,results) =>{
      if(error){
        console.log(error);
      }else{
       res.redirect('/')
      }
    });  
};
