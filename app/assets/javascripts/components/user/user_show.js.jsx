var UserShow = React.createClass({

  resendEmailVerification: function () {
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
