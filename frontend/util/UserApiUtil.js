var CurrentUserActions = require("../actions/CurrentUserActions");

var UsersApiUtil = {

  createUser: function (formData, success, failure) {
    $.ajax({
      url: 'api/users',
      type: 'POST',
      dataType: 'json',
      data: formData,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
      error: function (error) {
        failure && failure(error);
      }
    });
  },

  updateUser: function (formData, userId, success) {
    $.ajax({
      url: 'api/users/' + userId,
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
      error: function (error) {

      }
    });
  }

};

module.exports = UsersApiUtil;
