var AuthDialogView = Backbone.View.extend({

  tagName: 'paper-dialog',

  attributes: {
    heading: 'Dialog Title',
    opened: 'true'
  },

  template: _.template('<p>Some content.</p>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  }

});
