import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const MenuItemSpan = styled.span`
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    color: ${(props => props.theme.palette.claro)};
    //text-decoration: none;
    background: transparent;
    font-size: 1.1rem;
    transition: color 100ms linear;
    font-family: ${(props) => props.theme.typography.fontFamily.nunito};
    font-weight: 500;
    letter-spacing: 1px;
  
    &:hover{
      color: ${(props => props.theme.palette.secundario)};
    }
`

const DropdownMenuItem = ({title, link}) => {
  return (
    <li style={{listStyle:"none"}}>
      <NavLink to={link} activeClassName="myActiveLink" style={{textDecoration:"none"}}>
        <div>
          <MenuItemSpan>{title}</MenuItemSpan>
        </div>
      </NavLink>
    </li>
  )
};

export default DropdownMenuItem;
