var CreateAccountDialog = Backbone.View.extend({

  id: 'create-account',

  events: {
    'click #create-account-submit': 'submitForm'
  },

  template: _.template(
    '<link rel="import" href="./polymer/CreateAccountDialog.html">' +
    '<create-account-dialog></create-account-dialog>'
  ),

  initialize: function() {
    this.setValidators();
    this.render();
  },

  render: function() {
    var html = this.template();
    this.$el.html(html);
  },

  show: function() {
    this.dialog = this.dialog || document.getElementById('create-account-dialog');
    this.dialog.open();
  },

  setValidators: function() {
    this.emailValidator = new RegExp(/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
  },

  submitForm: function() {

    this.email = this.email || document.getElementById('create-account-email');
    this.password = this.password || document.getElementById('create-account-password');
    this.verifyPassword = this.verifyPassword || document.getElementById('create-account-verify-password');
    this.fullName = this.fullName || document.getElementById('create-account-full-name');
    this.channel = this.channel || document.getElementById('create-account-channel');
    this.errorMessage = this.errorMessage || document.getElementById('create-account-error');

    // Check for valid input
    if (!this.isValidInput()) {
      return;
    }

    // Invoke User Model register method

    // Close Dialog
    this.dialog.close();
  },

  isValidInput: function(input) {

    // email
    if (!this.emailValidator.test(this.email.value)) {
      this.errorMessage.innerHTML = 'Please enter a valid email address.';
      return false;
    }

    // password
    if (this.password.value.length === 0 || this.verifyPassword.value.length === 0) {
      this.errorMessage.innerHTML = 'Please enter a valid password.';
      return false;
    } else if (this.password.value !== this.verifyPassword.value) {
      this.errorMessage.innerHTML = 'Passwords did not match. Please try again.';
      return false;
    }

    // full name
    if (!this.fullName.value.length === 0) {
      this.errorMessage.innerHTML = 'Please enter a valid name.';
      return false;
    }

    // channel
    if (!this.channel.value.length === 0) {
      this.errorMessage.innerHTML = 'Please enter a valid channel.';
    }

    return true;
  }


});
