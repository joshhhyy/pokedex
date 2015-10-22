var app = app || {};
    pokemonId = 1
    urlLink = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId.toString();

app.Pokemons = Backbone.Collection.extend({

  model: app.Pokemon,

  url: urlLink,

  sortType: 'natural',

  // localStorage: new Backbone.LocalStorage('backbone-pokedex'),

  comparator: function(m) {
    return m.get('national_id')
  },

  initialize: function() {
    var self = this
    console.log(this.url)
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