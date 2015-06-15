var DashboardView = Backbone.View.extend({

  id: 'dashboard',

  initialize: function() {
    this.rsvp = new RsvpView({
      model: new Channel()
    });
    this.counter = new CounterView();
   // this.message = new MessageView();
    this.render();
  },

  render: function() {
    this.$el.append([
      this.rsvp.$el,
      this.counter.$el
    //  this.message.$el
    ]);
  }

});
