var AuthDialogView = Backbone.View.extend({

  id: 'auth',

  template: _.template(
    '<link rel="import" href="./polymer/AuthDialog.html">' +
    '<auth-dialog></auth-dialog>'
  ),

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  },

  show: function() {
    this.dialog = this.dialog || document.getElementById('auth-dialog');
    this.dialog.open();
  }

});
