# Clínica dental backend

Proyecto que recrea la parte backend de una app de citas de una consulta de dentistas. 


### Requisitos e instalación 

Para poder trabajar con el backend de la clínica dental será necesario tener instalado Visual Studio Code, Postman, SQL Workbench y hará falta también trabajar con nodemon y express.

Descargue el zip del proyecto, descomprímalo y ábralo con Visual Studio Code o cualquier programa similar.

Necesitará Postman para enviar peticiones al servidor, como por ejemplo la de crear un usuario.



### Descripción del proyecto

El primer punto que se puede destacar de este proyecto es que se divide en dos roles de usuarios (customers): Admin y Guest.

El usuario con id = 1 es el Admin y el resto que se creen después llevarán el rol de Guest.

Los clientes o usuarios con rol Guest tienen acceso limitado a las distintas funciones que permite hacer la app. Los clientes solo podrán darse de alta (/register), hacer login y logout, consultar citas pendientes (/showPending), crear y eliminar citas.

Habrá una tabla que contenga el historial de los pacientes a la que solo tendrá acceso el Admin con una verificación especial de su token. Aquí el Admin podrá crear, eliminar y consultar todos los registros relativos al historial personal de cada uno de los pacientes.

Solo el Admin podrá listar por id y a todos los usuarios de la lista. Por otra parte, también será solo competencia del Admin la consulta de las citas pasadas.

### Diagrama de la base de datos 
![alt tag] (https://imgur.com/a/WhZbZUb)




## Licencia 

Este proyecto ha sido realizado por Elena Sánchez de la Blanca y está sujeto a la licencia MIT. Para obtener más información, por favor diríjase al archivo LICENSE que encontrará adjunto. 

