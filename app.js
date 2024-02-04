const db = require('./db/connection');
const axios = require('axios');

const createClient = () => {
  axios.get('https://randomuser.me/api/')
    .then((response) => {
      const { name } = response.data.results[0];
      const sql = `INSERT INTO clients (name,last_name, created_at) VALUES ('${name.first}','${name.last}', '2024-02-01 19:07:41')`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        console.log('Cliente creado!');
        /*const sql = `INSERT INTO logs (description, time_stamp) VALUES ('Cliente creado', NOW())`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log('Log creado!');
        });*/
      });
    })
    .catch((error) => {
      console.log(error);
    });
}



setInterval(createClient, 5000);

const addPet = () => {
  const mascotas = ['Mike', 'Jon', 'Jasso', 'Coco', 'Puc', 'Chombo', 'Machete', 'Betja', 'Niño', 'Many', 'Furcio'];

  const random = mascotas[Math.floor(Math.random() * mascotas.length)];

  const sqlPet = `INSERT INTO pets (name, type, breed, owner_id) VALUES ('${random}', 'Cat', 'rio', 7)`;
  db.query(sqlPet, (err, result) => {
    if (err) throw err;
    console.log('Mascota  creada');
  });
}

setInterval(addPet, 5000);
