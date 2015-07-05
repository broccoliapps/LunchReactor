var CreateAccountDialog = Backbone.View.extend({

  id: 'auth',

  template: _.template(
    '<link rel="import" href="./polymer/CreateAccountDialog.html">' +
    '<create-account-dialog></create-account-dialog>'
  ),

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  },

  show: function() {
    this.dialog = this.dialog || document.getElementById('create-account-dialog');
    this.dialog.open();
  }

});
