var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var IndexRedirect = require("react-router").IndexRedirect;
var createHistory = require("history").createHistory;

var App = require("./components/app");
var SessionForm = require("./components/session/sessionform");
var UserForm = require("./components/user/userform");
var Account = require("./components/user/account");

var routes = (
  <Router history={ createHistory() }>
    <Route name="app" path="/" component={ App }>
        <Route path="signin" component={ SessionForm }/>
        <Route path="signup" component={ UserForm }/>
        <Route path="account" component={ Account }/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});
