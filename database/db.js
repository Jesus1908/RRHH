const mysql = require('mysql');
const conexion = mysql.createConnection({
  host: '127.0.0.1',
  user:'root',
  password: '',
  database: 'rrhh'
});

conexion.connect((error) =>{
  if(error){
    console.error(`Error en la conexion: ${error}`);
    return;
  }

  console.log(`Conectado correctamente al servidor`)
});

module.exports = conexion;