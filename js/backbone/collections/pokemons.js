var app = app || {};
    pokemonId = 1
    urlLink = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId.toString();

app.Pokemons = Backbone.Collection.extend({
  model: app.Pokemon,
  url: urlLink,
  sortType: 'natural',

  comparator: function(m) {
    return m.get('national_id')
  },

  initialize: function() {
    var self = this
    console.log(this.url)
    this.fetch({
      success: function() {
        while (pokemonId < 151) {
          pokemonId += 1;
          self.url = 'http://pokeapi.co/api/v1/pokemon/' + pokemonId.toString();
          self.fetch({remove: false})
          console.log(self);
        }
      }
    }).done(function() {
      var appView = new app.AppView({collection: app.pokedex});
      appView.render();
    })

  }

});