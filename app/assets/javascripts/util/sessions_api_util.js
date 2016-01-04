var SessionsApiUtil = {
  login: function (credentials, success, errorCallback) {
    return $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);
        success && success();
      },
      error: function (error) {
        errorCallback && errorCallback(error);
      }
    });
  },

  logout: function () {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        CurrentUserActions.receiveCurrentUser({});
      },
      error: function (error) {

      }
    });
  },

  fetchCurrentUser: function (success) {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function (currentUser) {
        CurrentUserActions.receiveCurrentUser(currentUser);

        success && success();
      },
      error: function (error) {

      }
    });
  },

  resendEmailVerification: function (success) {
    $.ajax({
      url: '/api/send_email_verification',
      type: 'GET',
      dataType: 'json',
      success: function (message) {
        success && success();
      },
      error: function (error) {

      }
    });
  }


};
