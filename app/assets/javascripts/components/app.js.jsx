var App = React.createClass({

  mixins: [ReactRouter.History],

  componentWillMount: function () {
    this._ensureLoggedIn();
  },

  render: function () {

    return (
      <div className="nokill-app">
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
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === "/signin" ||
        this.props.location.pathname === "/signup" ||
        CurrentUserStore.isLoggedIn()) {
      return;
    }
    this.history.pushState(null, "/signin");
  }
});
