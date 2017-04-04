var Film = function(options){
  this.title = options.title;
  this.year = options.year;
  this.director = options.director;
  this.actors = options.actors;
  this.reviews = options.reviews || [];
}

Film.prototype = {
  addReview: function(review){
    this.reviews.push(review)
  }
}

module.exports = Film;