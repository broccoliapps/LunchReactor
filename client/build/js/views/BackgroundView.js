var BackgroundView = Backbone.View.extend({
  el: '#background',

  template: _.template(
    '<video id="bgvid" autoplay loop style="display: inline;">' +
    '<source id="source" src="<%= filename %>" type="video/mp4">' +
    '</video>'
  ),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      filename: this.randomBackground()
    }));
  },

  randomBackground: function() {
    return './assets/' + Math.floor((Math.random() * 4) + 1) + '.mp4';
  }

});
