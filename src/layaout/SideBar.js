import React from "react";
import styled from "styled-components";
import PeopleLoading from "../pages/PeopleLoading";
import TablePeople from "../pages/TablePeople"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const SidebarContainer=styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 52px;
  bottom: 0%;
  background: #FFFFFF;
  width: 350px;
`;

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
});
const Sidebar =()=>{

  return(
    <SidebarContainer>
      <PeopleLoading/>      
    </SidebarContainer>
  )
}

export default Sidebar;
