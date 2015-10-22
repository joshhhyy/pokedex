var app = app || {}

app.PokemonView = Backbone.View.extend({
  el: '#info',
  render: function () {
    console.log('balls')
    var pokemonTemplate = $('#pokemonTemplate').html();
    var pokemonHTML = _.template(pokemonTemplate);
    console.log(this.model)
    this.$el.html( pokemonHTML(this.model.toJSON()) );
  }
});