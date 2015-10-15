var app = app || {}

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


app.pokedex = new app.Pokemons
console.log(app.pokedex)

$(document).ready(function () {
  app.router = new app.appRouter();
  Backbone.history.start();
})  










