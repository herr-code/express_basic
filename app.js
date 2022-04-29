//usando objeto express
const express = require('express')
//App de express
const app = express()
//Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000

//path inicial, responderá a la URL localhost:3000
app.get('/', (req, res) => {
  res.send('Hello world')
}); 

//Respondiendo texto
//URL => localhost:3000/launchx
app.get('/launchx', (req, res) => {
  res.send('Bienvenidos a launchx')
}); 

//Con esto inicializamos esta app
app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
});