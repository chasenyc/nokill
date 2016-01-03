var UserShow = React.createClass({

  render: function () {
    if (Util.isObjectEmpty(this.props.currentUser)) {
      return (
        <div className="show-user">

        </div>
      )
    }
    var currUser = this.props.currentUser;
    verified = (currUser.email_verified ? 'Verified' : 'Pending Verification')
    return (
      <div className="show-user">
        <p>
          Name: {currUser.fname} {currUser.lname}
        </p>
        <p>
          E-Mail: {currUser.email}
        </p>
        <p>
          E-Mail Verified: {verified}
        </p>
        <p>
          Phone Number: {currUser.phone_number}
        </p>
      </div>
    );
  },
});
