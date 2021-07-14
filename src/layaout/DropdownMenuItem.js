import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {Divider} from "@material-ui/core";
import NextIcon from "../icons/next.png";
const MenuTitleSpan = styled.span`
  //position: absolute;
  position: absolute;
  left:14.93px;
  padding-bottom: 20px;
`
const MenuSubTitleSpan = styled.span`
  //position: absolute;
  position: absolute;
  left:14.93px;
  padding-top: 18px;
  font-size: 14px !important;
  color: #828282 !important;
  line-height: 17px !important;
  font-weight: normal !important;
`
const ImgStyled=styled.img`
  height: 12px;
  //width: 7.41px;
  //position: absolute;
  padding-left: 318px;
  padding-top: 6px;
`;
const ContainerItem = styled.div`
  height:69px;
 //top: 16px;
  bottom: 0%;
/* Header */
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  //font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
  /* Text/Dark */
  color: #333333;
`;
const DropdownMenuItem = ({title, link, subtitle}) => {
  return (
    <li style={{listStyle:"none"}}>
      <NavLink to={link} activeClassName="myActiveLink" style={{textDecoration:"none"}}>
        <ContainerItem>
          <MenuTitleSpan>{title}</MenuTitleSpan>
          <MenuSubTitleSpan>Human from {subtitle}</MenuSubTitleSpan>
          <ImgStyled src={NextIcon}/>
        </ContainerItem>
        <Divider/>
      </NavLink>
    </li>
  )
};

export default DropdownMenuItem;
