var React = require("react");
var SessionApiUtil = require("../../util/SessionApiUtil");
var CurrentUserStore = require("../../stores/CurrentUser");


var Nav = React.createClass({

  onAccountClick: function () {
    this.props.history.pushState(null, "/account");
  },

  onSignInClick: function () {
    this.props.history.pushState(null, "/signin");
  },

  onSignUpClick: function () {
    this.props.history.pushState(null, "/signup");
  },

  onLogOutClick: function () {
    SessionApiUtil.logout();
  },

  render: function () {

    return (
      <nav className="primary-nav group">
        {this._sessionIcon()}
        {this._profileIcon()}
      </nav>
    );
  },

  _sessionIcon: function () {
    var innerText;
    if (CurrentUserStore.isLoggedIn()) {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onLogOutClick}>Log Out</button>
    } else {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onSignInClick}>Sign In</button>
    }
    return innerText;
  },

  _profileIcon: function () {
    var innerText;
    if (CurrentUserStore.isLoggedIn()) {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onAccountClick}>Account</button>
    } else {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onSignUpClick}>Sign Up</button>
    }
    return innerText;
  }
});

module.exports = Nav;
