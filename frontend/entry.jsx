var React = require("react");
var ReactDOM = require("react-dom");
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var IndexRedirect = require("react-router").IndexRedirect;
var createHistory = require("history").createHistory;

var App = require("./components/app");

var routes = (
  <Router history={ createHistory() }>
    <Route name="app" path="/" component={ App }>

    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(routes, document.getElementById('content'));
});
