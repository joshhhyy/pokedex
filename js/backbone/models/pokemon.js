var app = app || {};

app.Pokemon = Backbone.Model.extend({
  // urlRoot: 'http://pokeapi.co/api/v1/pokemon/1/', 

  defaults: {
    name: 'Missingno',
  }
});