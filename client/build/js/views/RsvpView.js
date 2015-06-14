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

    var hasRSVPed = this.model.get('hasRSVPed');

    // Has user RSVPed before?
    var html = hasRSVPed ? this.success : this.template({
      timeLeft: this.model.get('timeLeft')
    });

    // Is it past expiration?
    if (!hasRSVPed && !this.model.get('isExpired')) {
      html += this.frost;
    }

    this.render(html);
  },

  render: function(html) {
    this.$el.html(html);
  },

  toggleFrost: function() {
    this.$el.children('#frost').toggleClass('hide');
  },

  doRSVP: function() {

    // TODO
    // Validate time, check if past expiration
    // Perform RSVP
  }
});
