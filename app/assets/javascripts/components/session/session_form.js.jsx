var SessionForm = React.createClass({

  render: function () {

    return(
      <div className="user-sign-in">
        <form
          className="sign-in-form"
          onSubmit={ this.submit }>
          <h1 className="user-form-header">Sign In</h1>
            <label>Email:</label>
            <input
              type="email"
              name="user[email]"
              placeholder="email"/>
            <label>Password:</label>
            <input type="password"
              name="user[password]"
              placeholder="password"/>
            <div className="btn-holder">
              <button className="btn large">Sign In</button>
            </div>
        </form>
      </div>
    )
  }
});
