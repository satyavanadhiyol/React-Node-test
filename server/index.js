const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
app.use(cors());

const db = require("./models/index");

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.sync()
   .then(() => {
      console.log("Synced db.");
   })
   .catch((err) => {
      console.log("Failed to sync db: " + err.message);
   });

db.sequelize.sync({ force: true }).then(() => {
   console.log("Drop and re-sync db.");
});

app.listen(PORT, () => {
   console.log(`Server is working on Port ${PORT}`);
});

app.get('/', (req, res) => {
   const result = [{
      id: '1',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }, {
      id: '2',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }, {
      id: '3',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }, {
      id: '4',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }, {
      id: '5',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }, {
      id: '6',
      profile: 'profile.jpeg',
      userName: 'satyavan',
      password: '7201092094',
      emailAddress: 'satyavanadhiyol28896@gmail.com',
      preference: 'VB5, VB6,.net, React Js'
   }];
   res.send(result);
});

