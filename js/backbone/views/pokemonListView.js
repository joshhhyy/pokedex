var app = app || {}

app.PokemonListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click' : 'showPokemon'
  },

  render: function() {
    var pokemonListTemplate = $('#pokemonListTemplate').html();
    var pokemonListHTML = _.template(pokemonListTemplate);
    this.$el.html( pokemonListHTML(this.model.toJSON()) );


    $('#pokemons').append(this.$el)
  },

  showPokemon: function (){
    console.log(this.model.get('national_id'))

    app.router.navigate('pokemons/' + this.model.get('national_id'), true)

  }
});