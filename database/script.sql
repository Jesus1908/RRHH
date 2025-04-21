CREATE DATABASE rrhh;
use rrhh;

CREATE TABLE empleados (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  dni CHAR(8) NOT NULL,
  cargo VARCHAR(50) NOT NULL,
  area VARCHAR(50) NOT NULL,
  fechaIngreso DATE NOT NULL
)ENGINE = INNODB;

select * from empleados