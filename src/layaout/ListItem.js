import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Divider} from "@material-ui/core";
import {CustomSpan, MenuSubTitleSpan} from "./Styles"

const ContainerItem = styled.div`
  height:69px;
`;

const ListItem = ({title, link, subtitle}) => {
  return (
    <li style={{listStyle:"none"}}>
      <NavLink to={link} activeClassName="myActiveLink" style={{textDecoration:"none"}}>
        <ContainerItem >
          <CustomSpan style={{position: "absolute",left:"14.93px", paddingTop: "16px"}}>{title}</CustomSpan>
          <MenuSubTitleSpan style={{ paddingTop: "36px"}} >Human from {subtitle}</MenuSubTitleSpan>
        </ContainerItem>
        <Divider style={{width:"349px"}}/>
      </NavLink>
    </li>
  )
};

export default ListItem;
