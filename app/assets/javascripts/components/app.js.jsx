var App = React.createClass({
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
  }
});
