import React, { useState } from "react";
import { render } from "react-dom";
import TablePeople from "./TablePeople";
import { Grid, Divider, Card} from "@material-ui/core";
import styled from "styled-components";
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
    <Grid container direction="row" justify="flex-start" >
      <ApolloProvider client={client}>
        <Grid item xs={12} style={{ paddingLeft:"40%" ,marginTop:"3%", display:"flex"}} >
          <CustomSpanTitle>Welcome to Star Wars!  </CustomSpanTitle>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft:"5%",paddingRight:"5%", marginTop:"1%", marginBottom:"3%", display:"flex"}} >
        <TablePeople onPeopleSelected={onPeopleSelected}/>
        </Grid>
        <Grid item xs={6}></Grid>
      </ApolloProvider>
    </Grid>
  );
}
export default PeopleLoading;
