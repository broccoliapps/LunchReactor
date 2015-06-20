var MessageView = Backbone.View.extend({

  id: 'message',

  events: {
    'click #link-auth': 'showAuthDialog',
    'click #link-auth2': 'showAuthDialog'
  },

  template: _.template(
    '<p>' +
    '<a id="link-auth">Sign in</a> ' +
    'or <a id="link-auth2" onclick=>create an account</a> in seconds.' +
    '</p>'),


  initialize: function(options) {
    this.auth = options.auth;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  showAuthDialog: function() {
    this.auth.show();
  }
});
