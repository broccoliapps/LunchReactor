var BackgroundView = Backbone.View.extend({

  el: '#background',

  template: _.template(
    '<video id="bgvid" autoplay loop>' +
    '<source src="<%= filename %>" type="video/mp4">' +
    '</video>'
  ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
        filename: this.randomBackground()
      }))
      .hide()
      .fadeIn();
  },

  randomBackground: function() {
    return './assets/' + Math.floor((Math.random() * 3) + 1) + '.mp4';
  }

});
