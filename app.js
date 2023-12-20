const express = require('express');
const mysql = require('mysql');

const app = express();

/*const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");*/

app.use(express.static('public'));

/*app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);*/

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000"));

/*const connection = mysql.createConnection({
    host     : 'localhost:3006',
    user     : 'root',
    password : 'marcbara2023',
    database : 'funkos_challenge'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error de conexión a MySQL:', err);
    } else {
      console.log('Conexión exitosa a MySQL');
    }
  });

  /*app.get('/', (req, res) => {
    
    connection.query('SELECT * FROM category', (error, results, fields) => {
      if (error) {
        console.error('Error en la consulta:', error);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(results);
      }
    });
  });*/

  