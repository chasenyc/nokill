var Header = React.createClass({

  onProfileClick: function () {
    this.props.history.pushState(null, "/account");
  },

  onSignInClick: function () {
    this.props.history.pushState(null, "/signin");
  },

  onSignUpClick: function () {
    this.props.history.pushState(null, "/signup");
  },

  onLogOutClick: function () {
    SessionsApiUtil.logout();
  },

  render: function () {

    return (
      <header className="primary-nav group">
        {this._sessionIcon()}
        {this._profileIcon()}
      </header>
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
    return (
        {innerText}
    );
  },

  _profileIcon: function () {
    var innerText;
    if (CurrentUserStore.isLoggedIn()) {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onProfileClick}>Account</button>
    } else {
      innerText = <button className="nav-right nav-button"
                  onClick={this.onSignUpClick}>Sign Up</button>
    }
    return (
        {innerText}
    );
  }
});
