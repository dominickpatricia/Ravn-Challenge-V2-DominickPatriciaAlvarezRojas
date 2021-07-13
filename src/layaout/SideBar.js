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
  background: ${(props) => props.theme.palette.claro};
  padding: 20px;
  min-width: 280px;
  max-width: 280px;
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
