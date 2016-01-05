var React = require("react");
var SessionApiUtil = require("../util/SessionApiUtil");
var CurrentUserStore = require("../stores/CurrentUser");

var App = React.createClass({

  getInitialState: function () {
    return this.getStateFromStore();
  },

  getStateFromStore: function () {
    return {
      isLoggedIn: CurrentUserStore.isLoggedIn(),
      user: CurrentUserStore.currentUser()
    };
  },

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    this.listenerToken = CurrentUserStore.addListener(this._onCurrUserChange);
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  render: function () {

    return (
      <div className="nokill-app">
        {this.state.user.email}
      </div>
    );
  },

  _onCurrUserChange: function () {
    this.setState(this.getStateFromStore());
  }

});

module.exports = App;
