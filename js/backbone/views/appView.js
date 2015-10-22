var app = app || {}

app.AppView = Backbone.View.extend({
  el: '.right',
  render: function() {
    var appHTML = $('#appTemplate').html();
    this.$el.html(appHTML);

    this.collection.each(function (pokemon) {
      var pokemonListView = new app.PokemonListView({model: pokemon});
        pokemonListView.render();

    console.log('view render')
    });
  }
});