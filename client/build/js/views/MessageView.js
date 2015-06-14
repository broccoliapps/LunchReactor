var MessageView = Backbone.View.extend({

  id: 'message',

  template: _.template(
    '<p>' +
    '<a id="link-auth" rel="leanModal" href="#modal-auth">Sign in</a> ' +
    'or <a id="link-auth2" rel="leanModal" href="#modal-auth">create an account</a> in seconds.' +
    '</p>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }

});
