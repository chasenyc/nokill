var React = require("react");
var SessionApiUtil = require("../util/SessionApiUtil");
var CurrentUserStore = require("../stores/CurrentUser");

var Nav = require("./nav/nav");

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
        <Nav {...this.props} {...this.state} />
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

  _onCurrUserChange: function () {
    this.setState(this.getStateFromStore());
  }

});

module.exports = App;
