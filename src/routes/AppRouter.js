import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import AdminRouter from "../routes/AdminRouter";
import {Redirect} from "react-router";

const AppRouter =() =>{

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/admin" component={AdminRouter} />
        </Route>
        <Route path="/admin" component={AdminRouter} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
