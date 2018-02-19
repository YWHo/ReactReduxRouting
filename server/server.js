const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/connection')
const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/api/pets', (req, res) => {
  console.log("get pets");
  db
    .select('*', 'species.name as species', 'pets.name as name', 'pets.id as id', 'species.id as species_id')
    .from('pets')
    .join('species', 'pets.species_id', 'species.id')
    .then(pets => res.json(pets))
})

server.get('/api/species', (req, res) => {
  db('species')
    .then(species => res.json(species))
})

server.post('/api/pets', (req, res) => {
  console.log(req.body)
  db('pets')
    .insert(req.body, 'id') //add to db
    .then(response => {
      db
        .select('*', 'species.name as species', 'pets.name as name', 'pets.id as id', 'species.id as species_id')
        .from('pets')
        .join('species', 'pets.species_id', 'species.id')
        .where('pets.id', response[0])
        .first()
        .then(pet => res.json(pet))
    }) //has beeen added, sends id to client
})

module.exports = server
