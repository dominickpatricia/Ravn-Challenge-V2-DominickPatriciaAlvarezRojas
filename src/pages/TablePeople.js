import React from "react";
import Loader from "../layaout/Loader";
import NextIcon from "../icons/next.png";
import styled from "styled-components";
import { Grid} from "@material-ui/core";
import ListItem from "../layaout/ListItem";
import {useQuery, gql} from "@apollo/client";
import {CustomSpanFailed} from "../layaout/Styles"

const GET_PEOPLE = gql` { allPeople { people { id name homeworld {name}} } }`;
const ImgStyled=styled.img`
  height: 12px;
`;

export const TablePeople = ({ onPeopleSelected }) =>  {
    const { loading, error, data } = useQuery(GET_PEOPLE);
    if (loading) return <h1> {data} </h1> ;//<Loader/>;
    if (error) return (
    <Grid container direction="row" justify="flex-start" >
        <Grid item xs={12} style={{ height:"60px",display:"flex", alignItems:"center",justifyContent:"center"}} >
            <CustomSpanFailed> Failed to load data</CustomSpanFailed>
        </Grid>
    </Grid>); 
    let indexPerson = 5;
    return (
        
        (data?.allPeople?.people).map((person,index) =>(
            <Grid container direction="row" justify="flex-start">
                <Grid item xs={11}  >
                    <ListItem title={person.name} link={"/admin/detalle/"+ person.id} subtitle={person.homeworld.name}/>
                </Grid>
                <Grid item xs={1}  style={{  display:"flex", alignItems:"center"}}>
                    <ImgStyled src={NextIcon}/>
                </Grid>
            </Grid>
        ))
        
    );
}
export default TablePeople;