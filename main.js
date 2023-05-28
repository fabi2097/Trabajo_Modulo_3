const express = require('express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')({
    promiseLib: require('bluebird')     
});
const app = express();
app.use(bodyParser.json());

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'Trabajo_Diplomado',
    user: 'postgres',
    password: '1010'
};
const db = pgp(cn);

app.post('/usuarios', async (req, res) => {
    const newUser = req.body;
    try {
        await db.none('INSERT INTO usuarios(cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) VALUES($1, $2, $3, $4, $5)', [newUser.cedula_identidad, newUser.nombre, newUser.primer_apellido, newUser.segundo_apellido, newUser.fecha_nacimiento]);
        res.status(200).send('Usuario creado');
    } catch (error) {
        res.status(500).send('Error al crear el usuario');
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const users = await db.any('SELECT * FROM usuarios');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Error al obtener los usuarios');
    }
});

app.get('/usuarios/:id_usuario', async (req, res) => {
    const id = req.params.id_usuario;
    try {
        const user = await db.one('SELECT * FROM usuarios WHERE cedula_identidad = $1', [id]);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send('Error al obtener el usuario');
    }
});

app.put('/usuarios/:id_usuario', async (req, res) => {
    const id = req.params.id_usuario;
    const updatedUser = req.body;
    try {
        await db.none('UPDATE usuarios SET nombre = $1, primer_apellido = $2, segundo_apellido = $3, fecha_nacimiento = $4 WHERE cedula_identidad = $5', [updatedUser.nombre, updatedUser.primer_apellido, updatedUser.segundo_apellido, updatedUser.fecha_nacimiento, id]);
        res.status(200).send('Usuario actualizado');
    } catch (error) {
        res.status(500).send('Error al actualizar el usuario');
    }
});

app.delete('/usuarios/:id_usuario', async (req, res) => {
    const id = req.params.id_usuario;
    try {
        await db.none('DELETE FROM usuarios WHERE cedula_identidad = $1', [id]);
        res.status(200).send('Usuario eliminado');
    } catch (error) {
        res.status(500).send('Error al eliminar el usuario');
    }
});

app.get('/usuarios/promedio-edad', async (req, res) => {
    try {
        const avgAge = await db.one('SELECT AVG(EXTRACT(YEAR FROM AGE(fecha_nacimiento))) as promedioEdad FROM usuarios');
        res.status(200).json(avgAge);
    } catch (error) {
        res.status(500).send('Error al obtener el promedio de edades');
    }
});

app.get('/estado', (req, res) => {
    res.json({
        "nameSystem": "api-users",
        "version": "1.0.0",
        "developer": "FABIAN",
        "email": "fabian.marca1@gmail.com"
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
