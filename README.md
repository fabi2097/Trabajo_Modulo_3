# API de Usuarios
Este proyecto es una API REST desarrollada con Node.js y Express, y usa PostgreSQL para la gestión de datos. La API permite crear, leer, actualizar y eliminar usuarios, y obtener el promedio de edad de los usuarios.
## Requisitos
- Node.js
- PostgreSQL
## Configuración del proyecto
1. Clonar el repositorio:
   git clone https://github.com/tu_usuario/tu_repositorio.git
2. Instalar las dependencias del proyecto:
   cd tu_repositorio
   npm install
3. Configurar la base de datos:
   - Abrir pgAdmin y crear una nueva base de datos.
   - Ejecutar el script SQL para crear la tabla de usuarios.
4. Configurar las variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto.
   - Agregar las siguientes líneas al archivo `.env`, reemplazando los valores según corresponda:
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tu_base_de_datos
   DB_USER=tu_usuario_de_base_de_datos
   DB_PASS=tu_contraseña_de_base_de_datos
  

5. Iniciar el servidor:
   node index.js
La API debería estar corriendo en http://localhost:3000.
## Endpoints
- `POST /usuarios`: Crea un nuevo usuario.
- `GET /usuarios`: Obtiene una lista de todos los usuarios.
- `GET /usuarios/:id_usuario`: Obtiene la información de un usuario específico.
- `PUT /usuarios/:id_usuario`: Actualiza la información de un usuario específico.
- `DELETE /usuarios/:id_usuario`: Elimina un usuario específico.
- `GET /usuarios/promedio-edad`: Obtiene el promedio de las edades de los usuarios.

## Contacto
FABIAN MARCA COLQUE 
Fabian.marca1@gmail.com
Si tienes alguna pregunta sobre este proyecto, no dudes en contactarme.
