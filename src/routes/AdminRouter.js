import React from "react";
import {Route, Switch} from "react-router-dom";
import PeopleDetail from "../pages/PeopleDetail";
import {Grid} from "@material-ui/core";
import Navbar from "../layaout/Navbar";
import Sidebar from "../layaout/SideBar";
import styled from "styled-components";

const AdminRouter=()=>{
  const parentPath='/admin'
  const ContainerView=styled.div`
  //overflow: auto;
  //width:890px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.palette.claro};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: ${(props) => props.theme.palette.complementario};
  }
`;
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
