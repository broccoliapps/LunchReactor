var DashboardView = Backbone.View.extend({

  id: 'dashboard',

  initialize: function() {
    this.rsvp = new RsvpView();
    this.counter = new CounterView();
    this.render();
  },

  render: function() {
    this.$el.append([
      this.rsvp.$el,
      this.counter.$el
    ]);
  }

});
