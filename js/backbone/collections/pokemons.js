var app = app || {};
    pokemonId = 1
    urlLink = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId.toString();

app.Pokemons = Backbone.Collection.extend({

  model: app.Pokemon,

  url: urlLink,

  sortType: 'natural',

  // localStorage: new Backbone.LocalStorage("backbonepokedex"),

  comparator: function(m) {
    return m.get('national_id');
  },

  initialize: function() {
    console.log(app.pokedex)
    var self = this;

    while (pokemonId < 152) {
      self.fetch({remove: false}).done(function() {
        if (app.pokedex.length === 151) {
          var appView = new app.AppView({collection: app.pokedex});
          appView.render(); 
        }
      })
      pokemonId += 1;
      self.url = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId.toString();
    }  
  }

});

app.pokedex = new app.Pokemons();