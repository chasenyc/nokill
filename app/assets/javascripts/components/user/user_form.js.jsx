var UserForm = React.createClass({

  submit: function (e) {
    e.preventDefault();
    var formData = $(e.currentTarget).serializeJSON();
    UsersApiUtil.createUser(formData, function () {
      this.props.history.pushState(null, '/profile');
    }.bind(this));

  },

  render: function () {

    return(
      <div className="user-sign-up">
        <form
          className="sign-up-form"
          onSubmit={ this.submit }>
          <h1 className="user-form-header">Create An Account</h1>
            <label>First Name:</label>
            <input
              type="text"
              name="user[fname]"
              placeholder="first name"/>
            <label>Last Name:</label>
            <input
              type="text"
              name="user[lname]"
              placeholder="last name"/>
            <label>Email:</label>
            <input
              type="email"
              name="user[email]"
              placeholder="email"/>
            <label>Password:</label>
            <input type="password"
              name="user[password]"
              placeholder="password"/>
            <label>Phone Number:
            </label>
            <input type="text"
              name="user[phone_number]"
              placeholder="2125551212"/>
            <div className="btn-holder">
              <button className="btn large">Create Account</button>
            </div>
        </form>
      </div>
    );
  }
});
