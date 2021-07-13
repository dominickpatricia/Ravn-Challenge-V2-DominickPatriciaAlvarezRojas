import React from "react";
import {Route, Switch} from "react-router-dom";
import PeopleDetail from "../pages/PeopleDetail";
import {Grid} from "@material-ui/core";
import Navbar from "../layaout/Navbar";
import Sidebar from "../layaout/SideBar"
const AdminRouter=()=>{
  const parentPath='/admin'

  return(
    <React.Fragment>
        <Navbar/>
        <Grid container style={{height: "91vh"}}>
            <Sidebar/>
            <Switch>
                <Route path={`${parentPath}/detalle/:id`} component={PeopleDetail}/>
            </Switch>
        </Grid>
    </React.Fragment>
  )
}

export default AdminRouter;
