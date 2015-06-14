var CounterView = Backbone.View.extend({

  id: 'counter',

  className: 'circle',

  template: _.template('<p><span class="count">—</span></p>'),
  initialize: function() {

    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  }
});
