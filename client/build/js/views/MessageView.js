var MessageView = Backbone.View.extend({

  id: 'message',

  events: {
    'click #sign-in': 'showSignInDialog',
    'click #create-account': 'showCreateAccountDialog'
  },

  template: _.template(
    '<p>' +
    '<a id="sign-in">Sign in</a> ' +
    'or <a id="create-account">create an account</a> in seconds.' +
    '</p>'),


  initialize: function(options) {
    this.createAccountDialog = options.createAccountDialog;
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  },

  showCreateAccountDialog: function() {
    this.createAccountDialog.show();
  }
});
