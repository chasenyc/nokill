var React = require("react");
var LinkedStateMixin = require("react-addons-linked-state-mixin");

var SessionForm = React.createClass({

  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({
      flash: '',
      email: '',
      password: ''
    });
  },

  submit: function (e) {
    e.preventDefault();
    var credentials = {
      email: this.state.email,
      password: this.state.password
    };
    SessionsApiUtil.login(credentials, this._successfulLogin, this._failedLogin);
  },

  render: function () {

    return(
      <div className="user-sign-in">
        <form
          className="sign-in-form"
          onSubmit={ this.submit }>
          <h1 className="user-form-header">Sign In</h1>
          <p className="flash-notice">{this.state.flash}</p>
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
            <div className="btn-holder">
              <button className="btn large">Sign In</button>
            </div>
            Or if you do not have an account&nbsp;
            <a href="#/signup" className="display-link">sign up.</a>
        </form>
      </div>
    )
  },

  _successfulLogin: function () {
    this.props.history.pushState(null, "/profile");
  },

  _failedLogin: function (error) {
    this.setState({flash: error.responseText})
  }
});

module.exports = SessionForm;
