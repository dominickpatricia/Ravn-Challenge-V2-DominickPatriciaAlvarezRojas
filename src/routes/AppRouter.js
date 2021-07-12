import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "../layaout/Navbar";
import React from "react";
import PeopleLoading from "../pages/PeopleLoading";
import PeopleDetail from "../pages/PeopleDetail";
import {Redirect} from "react-router";


const AppRouter =() =>{

  return(
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/people" />
        </Route>
        <Route path="/people" component={PeopleLoading} />
        <Route path="/detalle/:codigo" component={PeopleDetail}/>
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter;
