var RsvpView = Backbone.View.extend({

  events: {
    'click': 'doRSVP',
    'mouseenter': 'toggleFrost',
    'mouseleave': 'toggleFrost'
  },

  template: _.template(
    '<div id="rsvp" class="circle">' +
    '<p><span class="rsvp">RSVP</span>' +
    '<%= timeLeft %></p></div>'
  ),
  frost: '<div id="frost" class="circle hide"></div>',
  success: '<div id="success" class="circle"><p>✓</p></div>',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {

    var hasRSVPed = this.model.get('hasRSVPed');

    // Has user RSVPed already?
    var html = hasRSVPed ? this.success : this.template(this.model.attributes);

    // Is it past expiration?
    if (!hasRSVPed && !this.model.get('isExpired')) {
      html += this.frost;
    }

    this.$el.html(html).hide().fadeIn();
  },

  toggleFrost: function() {
    this.$el.children('#frost').toggleClass('hide');
  },

  doRSVP: function() {
    this.model.doRSVP();
    // TODO
    // Validate time, check if past expiration
    // Perform RSVP
  }
});
