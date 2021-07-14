import React from "react";
import styled from "styled-components";

const NavbarStyled=styled.div`
  position: absolute;
  width: 1440px;
  height: 52px;
  left: 0px;
  top: 0px;
  background: #121212;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

const SpanStyled=styled.span`
  position: absolute;
  width: 191px;
  height: 20px;
  left: 33px;
  top: 16px;
/* Header */
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
/* Gray 6 */
  color: #F2F2F2;
`;



const Navbar =()=>{

  return(
    <NavbarStyled>
      <SpanStyled>Ravn Start Wars Registry</SpanStyled>
    </NavbarStyled>
  )

}

export default Navbar;
