var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.title = new TitleView();

  },

  render: function() {
    this.$el.append([
      this.title.$el
    ]);
  }

});
