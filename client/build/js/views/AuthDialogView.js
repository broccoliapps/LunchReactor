var AuthDialogView = Backbone.View.extend({

  id: 'auth',

  template: _.template('<p>Some content.</p>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  }

});
