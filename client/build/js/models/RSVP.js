var RSVP = Backbone.Model.extend({

  defaults: {
    timeLeft: 'in 11 hours',
    isExpired: false,
    hasRSVPed: false
  },

  initialize: function() {},

  doRSVP: function() {
    this.set('hasRSVPed', true);
  }
});
