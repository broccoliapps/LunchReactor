var TitleView = Backbone.View.extend({

  id: 'title',

  template: _.template(
    '<h1>Lunch Reactor</h1>' +
    '<h2><%= date %></h2>'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      date: moment().format('dddd, MMMM Do YYYY')
    }));
  }
});
