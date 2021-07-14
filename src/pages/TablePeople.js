import React from "react";
import Loader from "../layaout/Loader";
import styled from "styled-components";
import DropdownMenuItem from "../layaout/DropdownMenuItem";
import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
} from "@apollo/client";
  
const client = new ApolloClient({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    cache: new InMemoryCache()
});
  
const GET_PEOPLE = gql` { allPeople{ people { id name homeworld {name}} } }`;

export const TablePeople = ({ onPeopleSelected }) =>  {
    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return <Loader/>;
    if (error) return `Error! ${error.message}`;
    return (
        (data?.allPeople?.people).map((person,index) =>(
            <DropdownMenuItem title={person.name} link={"/admin/detalle/"+ person.id} subtitle={person.homeworld.name}/>
        ))
    );
}
export default TablePeople;