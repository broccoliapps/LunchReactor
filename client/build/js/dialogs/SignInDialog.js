var SignInDialog = Backbone.View.extend({

  id: 'sign-in',

  template: _.template(
    '<link rel="import" href="./polymer/SignInDialog.html">' +
    '<sign-in-dialog></sign-in-dialog>'
  ),

  initialize: function() {
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  },

  show: function() {
    this.dialog = this.dialog || document.getElementById('sign-in-dialog');
    this.dialog.open();
  }

});
