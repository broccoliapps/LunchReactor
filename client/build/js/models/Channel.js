var Channel = Backbone.Model.extend({

  defaults: {
    id: '',
    isRSVPed: false,
    closeAt: {
      hour: 11,
      minute: 0
    }
  },

  initialize: function() {},

  getTimeLeft: function() {
    var now = moment();
    var deadline = this._formatCloseAt();
    return this.isExpired() ? 'Closed' : deadline.from(now);
  },

  isExpired: function() {
    var now = moment();
    var deadline = this._formatCloseAt();
    return now.isAfter(deadline);
  },

  _formatCloseAt: function() {
    return moment()
      .hour(this.get('closeAt').hour)
      .minute(this.get('closeAt').minute)
      .second(0);
  }

});
