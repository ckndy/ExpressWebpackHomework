var Film = require('./film');
var Review = require('./review');

var Films = function(){

  var review1 = new Review({
    comment: "Epic in scope while maintaining a patience and intimacy characteristic of European art cinema, The Godfather is rightly considered one of the greatest films ever made.",
    rating: 99,
    author: "Elliot Panek - Common Sense Media"
  });

  var review2 = new Review({
    comment: "Perfomances are excellent, and despite its moralistic conclusion, the film has since become de rigueur viewing for crack barons, who know a good shoot-em-up when they see one.",
    rating: 82,
    author: "Andy Gill - Empire"
  });

  var film1 = new Film({
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"]
    genre: "Crime"
  });

  var film2 = new Film({
    title: "Scarface",
    year: 1983,
    director: "Brian De Palma",
    actors: ["Al Pacino", "Michelle Pfeiffer"]
    genre: "Crime"
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
}

module.exports = Films;