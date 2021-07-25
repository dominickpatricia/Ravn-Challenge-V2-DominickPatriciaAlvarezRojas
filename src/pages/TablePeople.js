import React, { useEffect } from "react";
import Loader from "../layaout/Loader";
import NextIcon from "../icons/next.png";
import styled from "styled-components";
import Client from "../layaout/Client";
import ListItem from "../layaout/ListItem";
import {Grid} from "@material-ui/core";
import {gql} from "apollo-boost";
import {ApolloProvider, useQuery} from "@apollo/react-hooks";
import {CustomSpanFailed} from "../layaout/Styles"

const GET_PEOPLE = gql`
  query repoQuery($after: String){
    allPeople (first: 5, after: $after){
  	  edges{
        node {
            id
            name
        homeworld {
      	  name
	      }
          }
      }
      pageInfo {
          endCursor
      }
    }
  }
`;

const ImgStyled=styled.img`
  height: 12px;
`;

function Repos() {
    function refreshing (){
        const { endCursor } = data.allPeople.pageInfo;
        if (endCursor==null){
            return;
        }
        fetchMore({
          variables: { after: endCursor },
          updateQuery: (prevResult, { fetchMoreResult }) => {
            fetchMoreResult.allPeople.edges = [
              ...prevResult.allPeople.edges,
              ...fetchMoreResult.allPeople.edges
            ];
            return fetchMoreResult;
          }
        });
    }

    const { data, error, loading, fetchMore } = useQuery(GET_PEOPLE, {variables: { after: null }} );

    useEffect(() => {
      if(!error && !loading) {
          refreshing();
      }
    }, [data, error, loading]);
    
    if (loading) return <Loader/>;

    if (error) return (
    <Grid container direction="row" justify="flex-start" >
        <Grid item xs={12} style={{ height:"60px",display:"flex", alignItems:"center",justifyContent:"center"}} >
            <CustomSpanFailed> Failed to load data</CustomSpanFailed>
        </Grid>
    </Grid>); 
  
    return (
      <>
          {data.allPeople.edges.map(({ node }) => (
            <Grid container direction="row" justify="flex-start">
                <Grid item xs={11}  >
                    <ListItem title={node.name} link={"/admin/detalle/"+ node.id} subtitle={node.homeworld.name}/>
                </Grid>
                <Grid item xs={1}  style={{  display:"flex", alignItems:"center"}}>
                    <ImgStyled src={NextIcon}/>
                </Grid>
            </Grid>
          ))
          }
      </>
    );
  }

export const TablePeople = ({ onPeopleSelected }) =>  {
    return (
        <ApolloProvider client={Client}>
            <Repos/>
        </ApolloProvider>
    );
}
export default TablePeople;