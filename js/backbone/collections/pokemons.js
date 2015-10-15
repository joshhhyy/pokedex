var app = app || {};
var urlFetch = 'http://pokeapi.co/api/v1/pokemon/148/'
    app.pokemonId = 1
    urlno = app.pokemonId.toString();
    app.urlLink = 'http://pokeapi.co/api/v1/pokemon/' + app.pokemonId.toString();

app.Pokemons = Backbone.Collection.extend({
  model: app.Pokemon,
  url: app.urlLink,
  sortType: 'natural',
  // parse: function(data) {
  //   return data.pokemon;
  // },

  comparator: function(m) {
    return m.get('national_id')
  },

  initialize: function() {
    var self = this
    console.log(this.url)
    this.fetch({
      success: function() {
        while (app.pokemonId < 151) {
          app.pokemonId += 1;
          self.url = 'http://pokeapi.co/api/v1/pokemon/' + app.pokemonId.toString();
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


  // initialize: function() {
  //   while (pokemonId < 152) {
  //     this.fetch({
  //       success: function() {
  //         console.log('fetching')
  //         var appView = new app.AppView({collection: app.pokedex});
  //         appView.render();
  //       }
  //     });
  //     console.log(pokemonId)
  //     pokemonId += 1
  //   }
  // }