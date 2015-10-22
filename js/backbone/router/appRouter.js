var app = app || {}

app.appRouter = Backbone.Router.extend ({

  routes: {
    ''             : 'index',
    'pokemons/:id' : 'viewPokemon'
  },

  index: function() {
    var appView = new app.AppView({collection: app.pokedex});
    appView.render();

  },

  viewPokemon: function (id) {
    console.log(id)
    var pokemon = app.pokedex.at((id - 1));
    var pokemonView = new app.PokemonView({model: pokemon})
    pokemonView.render();
  }
});