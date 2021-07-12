import React, { useState } from "react";
import { render } from "react-dom";
import TablePeople from "./TablePeople";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache()
});

export const PeopleLoading = () => {
  const [selectedPeople, setSelectedPeople] = useState(null);
  function onPeopleSelected({ target }) {
    setSelectedPeople(target.value);
  }
  return (
    
    <ApolloProvider client={client}>
      <div>
        <h2>Building Query components 🚀</h2>
        {selectedPeople }
        <TablePeople onPeopleSelected={onPeopleSelected}/>
      </div>
    </ApolloProvider>
  );
}
export default PeopleLoading;
