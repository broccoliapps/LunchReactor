var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.title = new TitleView();
    this.dashboard = new DashboardView();
    this.auth = new AuthDialogView();
    this.message = new MessageView({
      auth: this.auth
    });
    this.render();
  },

  render: function() {
    this.$el.append([
        this.title.$el,
        this.dashboard.$el,
        this.message.$el,
        this.auth.$el
      ])
      .hide()
      .fadeIn();
  }

});
