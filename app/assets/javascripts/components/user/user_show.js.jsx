var UserShow = React.createClass({

  getInitialState: function () {
    return ({emailSent: false});
  },

  resendEmailVerification: function (e) {
    e.preventDefault();
    this.setState({emailSent: true});
    SessionsApiUtil.resendEmailVerification();
  },

  render: function () {
    if (Util.isObjectEmpty(this.props.currentUser)) {
      return (
        <div className="show-user">

        </div>
      )
    }
    var currUser = this.props.currentUser;
    return (
      <div className="show-user">
        <h1>Your Account</h1>
        <p>
          Name: {currUser.fname} {currUser.lname}
        </p>
        <p>
          E-Mail: {currUser.email}
        </p>
        <p>
          E-Mail Status: {this._verified()}
        </p>
        <p>
          Phone Number: {currUser.phone_number}
        </p>
      </div>
    );
  },

  _verified: function () {
    console.log(this.state.emailSent);
    if (this.state.emailSent === true) { return 'e-mail sent'}
    var result;
    if (this.props.currentUser.email_verified) {
      result = 'Verified';
    } else {
      result = <button
                onClick={this.resendEmailVerification}>
                  Resend Verification
              </button>;
    }
    return result
  }
});
