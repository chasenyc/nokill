var SessionForm = React.createClass({

  mixins: [ReactRouter.History],

  getInitialState: function () {
    return ({flash: ''});
  },

  submit: function (e) {
    e.preventDefault();
    var credentials = $(e.currentTarget).serializeJSON();
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
              placeholder="email"/>
            <label>Password:</label>
            <input type="password"
              name="password"
              placeholder="password"/>
            <div className="btn-holder">
              <button className="btn large">Sign In</button>
            </div>
        </form>
      </div>
    )
  },

  _successfulLogin: function () {
    this.history.pushState(null, "/");
  },

  _failedLogin: function (error) {
    this.setState({flash: error.responseText})
  }
});
