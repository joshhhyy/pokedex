var app = app || {}

app.PokemonView = Backbone.View.extend({
  el: '#main',
  render: function () {
    console.log(this.model)
    var pokemonTemplate = $('#pokemonTemplate').html();
    var pokemonHTML = _.template(pokemonTemplate);
    console.log(this.model)
    this.$el.html( pokemonHTML(this.model.toJSON()) );
  }
});