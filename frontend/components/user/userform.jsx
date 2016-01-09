var React = require("react");
var LinkedStateMixin = require("react-addons-linked-state-mixin");

var SessionApiUtil = require("../../util/SessionApiUtil");
var UsersApiUtil = require("../../util/UserApiUtil");

var UserForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      flash: '',
      fname: '',
      lname: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      phoneNumber: '',
      passwordValidation: '',
      submitDisabled: false,
    });
  },

  submit: function (e) {
    e.preventDefault();
    this.setState({submitDisabled: true});
    var credentials = {
      'user[fname]': this.state.fname,
      'user[lname]': this.state.lname,
      'user[email]': this.state.email,
      'user[password]': this.state.password,
      'user[phone_number]': this.state.phoneNumber
    };
    UsersApiUtil.createUser(credentials, this._successfulSignUp,
                            this._failedSignUp);
  },

  render: function () {
    return(
      <div className="user-sign-in">
        <form
          className="sign-in-form"
          onSubmit={ this.submit }>
          <h1 className="user-form-header">Sign Up</h1>
          <p className="flash-notice">{this.state.flash}</p>
            <label>First Name:</label>
            <input
              type="text"
              name="fname"
              placeholder="Jane"
              valueLink={ this.linkState("fname") } />
            <label>Last Name:</label>
            <input
              type="text"
              name="lname"
              placeholder="Smith"
              valueLink={ this.linkState("lname") } />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              valueLink={ this.linkState("email") } />
            <label>Password:</label>
            <input type="password"
              name="password"
              placeholder="password"
              valueLink={ this.linkState("password") } />
            <div
              className={this._isPasswordValid()}>
                Password must be at least 8 characters.
            </div>
            <label>Password Confirmation:</label>
            <input type="password"
              name="password-conf"
              placeholder="password confirmation"
              valueLink={ this.linkState("passwordConfirmation") } />
            <div
               className={this._isPasswordConfirmationValid()}>
                  passwords do not match.
            </div>
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone-number"
              placeholder="123-456-7890"
              valueLink={ this.linkState("phoneNumber") } />
            <div className="btn-holder">
              <button
                disabled={this.state.submitDisabled}
                className="btn large">Sign Up</button>
            </div>
            Or if you have an account&nbsp;
            <a href="#/signin" className="display-link">sign in.</a>
        </form>
      </div>
    )
  },

  _successfulSignUp: function () {
    this.props.history.pushState(null, "/account");
  },

  _failedSignUp: function () {
    this.setState({submitDisabled: false});
  },

  _isPasswordValid: function () {
    if (this.state.password.length > 7) {
      return 'input-validation';
    }
    return 'input-validation visible';
  },

  _isPasswordConfirmationValid: function () {
    if (this.state.password ===
        this.state.passwordConfirmation) {
        return 'input-validation';
    }
    return 'input-validation visible';
  },

});

module.exports = UserForm;
