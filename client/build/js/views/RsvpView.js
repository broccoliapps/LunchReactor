var RsvpView = Backbone.View.extend({

  events: {
    'click': 'doRSVP',
    'mouseenter': 'toggleFrost',
    'mouseleave': 'toggleFrost'
  },

  template: _.template(
    '<div id="rsvp" class="circle">' +
    '<p><span class="rsvp">RSVP</span>' +
    '<span class="expiration"><%- this.model.getTimeLeft() %></span></p></div>'
  ),
  frost: '<div id="frost" class="circle hide"></div>',
  success: '<div id="success" class="circle"><p>✓</p></div>',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function() {

    var isRSVPed = this.model.get('isRSVPed');

    // Has user RSVPed already?
    var html = isRSVPed ? this.success : this.template();

    // Is it past expiration?
    if (!isRSVPed && !this.model.isExpired()) {
      html += this.frost;
    }

    this.$el.html(html).hide().fadeIn('slow');
  },

  toggleFrost: function() {
    if (!this.model.isExpired()) {
      this.$el.children('#frost').toggleClass('hide');
    }
  },

  doRSVP: function() {
    if (!this.model.isExpired() && !this.model.get('isRSVPed')) {
      this.model.set('isRSVPed', true);
    }
  }
});
