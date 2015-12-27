$(function(){
  var root = document.getElementById('content');
  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var routes = (
      <Route path="/" component={App}>
        <Route path="signup" component={ UserForm }/>
      </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
