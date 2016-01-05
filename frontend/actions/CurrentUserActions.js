var AppDispatcher = require("../dispatcher/Dispatcher");
var CurrentUserConstants = require("../constants/CurrentUserConstants");

var CurrentUserActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};

module.exports = CurrentUserActions;
