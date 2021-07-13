import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "../layaout/Navbar";
import React from "react";
import PeopleLoading from "../pages/PeopleLoading";
import PeopleDetail from "../pages/PeopleDetail";
import {Redirect} from "react-router";
import Sidebar from "../layaout/SideBar"
import AdminRouter from "../routes/AdminRouter"
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
