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
  font-weight: bold;
  font-size: 25px;
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
      <SpanStyled>STAR WARS</SpanStyled>
    </NavbarStyled>
  )

}

export default Navbar;
