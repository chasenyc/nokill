var React = require("react");
var SessionApiUtil = require("../../util/SessionApiUtil");

var Account = React.createClass({
  getInitialState: function () {
    return ({emailSent: false});
  },

  resendEmailVerification: function (e) {
    e.preventDefault();
    this.setState({emailSent: true});
    SessionApiUtil.resendEmailVerification();
  },


  render: function () {
    var currUser = this.props.user;
    return (
      <div className="user-account">
        <h1>Your Account</h1>
        <p>
          Name: {currUser.fname} {currUser.lname}
        </p>
        <p>
          E-Mail: {currUser.email}
        </p>
        <p>
          E-Mail Status: {this._emailVerified()}
        </p>
        <p>
          Phone Number: {currUser.phone_number}
        </p>
      </div>
    );
  },

  _emailVerified: function () {
    if (this.state.emailSent === true) { return 'e-mail sent'}
    var result;
    if (this.props.user.email_verified) {
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

module.exports = Account;
