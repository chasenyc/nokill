var App = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({
      user: CurrentUserStore.currentUser()
    });
  },

  componentWillReceiveProps: function () {
    SessionsApiUtil.fetchCurrentUser(this._ensureLoggedIn);
  },

  componentWillMount: function () {
    SessionsApiUtil.fetchCurrentUser(this._ensureLoggedIn);
    CurrentUserStore.addChangeListener(this._userChanged);
  },

  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this._userChanged);
  },

  render: function () {

    return (
      <div className="nokill-app">
        <Header {...this.props} {...this.state} />
        {this._renderedChildren()}
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
    var result = CurrentUserStore.isLoggedIn();
    if (CurrentUserStore.isLoggedIn() &&
        (this.props.location.pathname === "/signin" ||
        this.props.location.pathname === "/signup")) {
          this.history.pushState(null, "/account");
        }

    if (this.props.location.pathname === "/signin" ||
        this.props.location.pathname === "/signup" ||
        CurrentUserStore.isLoggedIn()) {
      return;
    }
    this.history.pushState(null, "/signin");
  },

  _userChanged: function () {
    this.setState({currentUser: CurrentUserStore.currentUser()});
  }
});
