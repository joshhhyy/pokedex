var app = app || {}

_.templateSettings = {
  evaluate : /\{\[([\s\S]+?)\]\}/g,     // {[ console.log("Hello"); ]} - runs
  interpolate : /\{\{([\s\S]+?)\}\}/g   // {{ key }} - interpolates
};


$(document).ready(function () {
  app.router = new app.appRouter();
  Backbone.history.start();
})  










