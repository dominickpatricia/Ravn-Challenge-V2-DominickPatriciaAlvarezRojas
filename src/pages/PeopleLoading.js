import React, { useState } from "react";
import TablePeople from "./TablePeople";
import ListContainer from "../layaout/ListContainer"
import Client from "../layaout/Client";
import {ApolloProvider} from "@apollo/client";

export const PeopleLoading = () => {
  const [selectedPeople, setSelectedPeople] = useState(null);
  function onPeopleSelected({ target }) {
    setSelectedPeople(target.value);
  }
  return (
    <React.Fragment>
      <ListContainer>
        <ApolloProvider client={Client}>
          <TablePeople onPeopleSelected={onPeopleSelected}/>
        </ApolloProvider>
      </ListContainer>
    </React.Fragment>
  );
}
export default PeopleLoading;
