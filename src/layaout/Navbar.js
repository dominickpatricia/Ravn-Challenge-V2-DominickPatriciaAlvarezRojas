import React from "react";
import styled from "styled-components";

const NavbarStyled=styled.div`
  background: ${(props) => props.theme.palette.principal};
  min-height: calc(9vh - 2px);
  display: flex;
  border-bottom: 2px solid ${(props) => props.theme.palette.complementario} ;;
`;

const SpanStyled=styled.span`
  color: ${(props) => props.theme.palette.claro} ;
  font-family: ${(props) => props.theme.typography.fontFamily.montserrat};
  align-self: center;
  font-weight: normal;
  font-size: 18px;
  padding-left:5%;
`;

const ImgStyled=styled.img`
  max-height: 8vh;
  margin-top: 4px;
  align-content: center;
  margin-left: 30px;
`;

const Navbar =()=>{

  return(
    <NavbarStyled>
      <SpanStyled>Ravn Start Wars Registry</SpanStyled>
    </NavbarStyled>
  )

}

export default Navbar;
