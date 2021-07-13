import React from "react";
import {useHistory} from "react-router";
import Loader from "../layaout/Loader";
import styled from "styled-components";
import { Grid, Divider, Card} from "@material-ui/core";
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
  
const GET_PEOPLE = gql` { allPeople{ people { id name } } }`;

const CustomSpanTitleTable=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-size: 22px;
  font-weight: bolder;
`;

export const TablePeople = ({ onPeopleSelected }) =>  {
    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return <Loader/>;
    if (error) return `Error! ${error.message}`;
    return (
        (data?.allPeople?.people).map((person,index) =>(
            <DropdownMenuItem title={person.name} link={"/admin/detalle/"+ person.id}/>
        ))
    );
}
export default TablePeople;