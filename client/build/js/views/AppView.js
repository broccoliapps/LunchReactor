var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.title = new TitleView();
    this.dashboard = new DashboardView();
    this.createAccountDialog = new CreateAccountDialog();
    this.message = new MessageView({
      createAccountDialog: this.createAccountDialog,
      signInDialog: null
    });
    this.render();
  },

  render: function() {
    this.$el.append([
        this.title.$el,
        this.dashboard.$el,
        this.message.$el,
        this.createAccountDialog.$el
      ])
      .hide()
      .fadeIn();
  }

});
