import React, { useState } from "react";
import { render } from "react-dom";
import TablePeople from "./TablePeople";
import { Grid, Divider, Card} from "@material-ui/core";
import styled from "styled-components";
import DropdownContainer from "../layaout/DropdownContainer"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
});
const CustomSpanTitle=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-size: 25px;
  font-weight: bolder;
  color: rgb(120,137,205);
`;
export const PeopleLoading = () => {
  const [selectedPeople, setSelectedPeople] = useState(null);
  function onPeopleSelected({ target }) {
    setSelectedPeople(target.value);
  }
  return (

    <React.Fragment>
        <DropdownContainer>
        <ApolloProvider client={client}>
          <TablePeople onPeopleSelected={onPeopleSelected}/>
          </ApolloProvider>
        </DropdownContainer>
    </React.Fragment>
  );
}
export default PeopleLoading;
