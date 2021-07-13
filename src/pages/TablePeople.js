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
    const history=useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { loading, error, data } = useQuery(GET_PEOPLE);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, !loading && data?.allPeople?.people.length - page * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    const labelOfPagina=(from,to,count)=>{
        return `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    };
    
    console.log(onPeopleSelected);
    if (loading) return <Loader/>;
    if (error) return `Error! ${error.message}`;
    
    const irADetalle = (codigo) => {
        history.push(`/detalle/`+codigo);
    };

    return (

            (data?.allPeople?.people).map((person,index) =>(
                    
                    
                    <DropdownMenuItem title={person.name} link={"/admin/detalle/"+ person.id}>
                        {/* <NavLink to={"/admin/detalle/"+ person.id}></NavLink> */}
                        {/* <ListItem button>{person.name}
                        </ListItem> */}
                        <Divider/>
                    </DropdownMenuItem>

                   
            ))
    
    );
}
export default TablePeople;