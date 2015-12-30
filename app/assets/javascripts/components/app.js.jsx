var App = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({
      user: CurrentUserStore.currentUser()
    });
  },

  componentWillMount: function () {
    SessionsApiUtil.fetchCurrentUser(this._ensureLoggedIn);
    CurrentUserStore.addChangeListener(this._userChanged);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._userChanged);
  },

  logOut: function () {
    SessionsApiUtil.logout();
    this.history.pushState(null, "/signin");
  },

  render: function () {

    return (
      <div className="nokill-app">
        <Header {...this.props} {...this.state} />
        {this._renderedChildren()}
        <button onClick={this.logOut}>Log out</button>
      </div>
    );
  },

  _renderedChildren: function () {
    var renderedChildren = React.Children.map(this.props.children,
      function (child) {
        return React.cloneElement(
        child, Object.assign({}, this.state, this.props)
        );
      }.bind(this)
    );
    return renderedChildren;
  },

  _ensureLoggedIn: function () {
    if (this.props.location.pathname === "/signin" ||
        this.props.location.pathname === "/signup" ||
        CurrentUserStore.isLoggedIn()) {
      return;
    }
    this.history.pushState(null, "/signin");
  },

  _userChanged: function () {
    this.setState({user: CurrentUserStore.currentUser()});
  }
});
