//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = express.Router();


// Get a single film
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
});

// Get all the films
filmRouter.get('/', function(req, res){
  res.json(films);
});

// Update a film with new info.
filmRouter.put('/:id', function(req, res){
  films[req.params.id] = request.body.films;
  res.json({data: films});
});

// Delete a film by id 
filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

filmRouter.post('/', function(req, res){
  var newFilm = {
    title: req.body.title,
    actors: req.body.actors
});

module.exports = filmRouter;