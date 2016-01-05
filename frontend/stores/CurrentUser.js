var Store = require("flux/utils").Store;
var AppDispatcher = require("../dispatcher/Dispatcher");
var CurrentUserConstants = require("../constants/CurrentUserConstants");

var CurrentUserStore = new Store(AppDispatcher);

var _currentUser = {};

CurrentUserStore.__onDispatch = function (payload) {
  var actionType = payload.actionType;
  var response = payload.response;

  switch (payload.actionType) {

    case CurrentUserConstants.RECEIVE_CURRENT_USER:
      setCurrentUser(payload.currentUser);
      break;
  }

};

CurrentUserStore.isLoggedIn = function () {
  return (typeof _currentUser.id !== "undefined");
};

CurrentUserStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

var setCurrentUser = function (user) {
  _currentUser = user;
  CurrentUserStore.__emitChange();
};

module.exports = CurrentUserStore;
