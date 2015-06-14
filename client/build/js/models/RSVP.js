var RSVP = Backbone.Model.extend({

  defaults: {
    timeLeft: '',
    isExpired: false,
    hasRSVPed: false
  },

  initialize: function() {
    this.setDefaults();
  },

  setDefaults: function() {
    var now = moment();
    var deadline = moment().hour(11).minute(0).second(0);
    if (now.isAfter(deadline) ||
      deadline.from(now) === 'in a few seconds') {
      this.set('timeLeft', 'Closed');
      this.set('isExpired', true);
    } else {
      this.set('timeLeft', deadline.from(now));
    }
  },

  doRSVP: function() {
    if (!this.get('isExpired')) {
      this.set('hasRSVPed', true);
    }
  }
});
