import React from "react";
import styled from "styled-components";
import PeopleLoading from "../pages/PeopleLoading";
const SidebarContainer=styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 52px;
  bottom: 0%;
  background: #FFFFFF;
  width: 350px;
  border-right: inset 1px;
`;
const Sidebar =()=>{
  return(
    <SidebarContainer>
      <PeopleLoading/>      
    </SidebarContainer>
  )
}
export default Sidebar;
