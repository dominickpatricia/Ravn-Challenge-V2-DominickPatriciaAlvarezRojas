
import {useHistory, useParams} from "react-router";
import { Grid, Divider, Card} from "@material-ui/core";
import styled from "styled-components";
import Loader from "../layaout/Loader";
import ContainerLayout from "../layaout/Container";
import React, {useEffect,useState} from "react"
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

const GET_PEOPLE_BY_ID = gql`
  query person($id: ID){person(id:$id){name eyeColor hairColor skinColor birthYear height mass gender  }}
`;
const CustomSpan=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  //font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 0.0125em;
  color: #333333;
`;
const CustomSpanSubtitle=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
/* Text/Light */
  color: #828282;
`;
const CustomSpanInformation=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  //font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.0125em;
/* Text/Light */
  color: #828282;
`;
const IconCustom=styled.img`
  max-height: 35px;
  max-width: 35px;
  margin-right: 20px;
  padding-left: 15px;
`;
function PersonalInformation({ id }) {
  console.log("id enviado",id);
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_PEOPLE_BY_ID,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true
    }
  );
  console.log(data);
  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return <Loader/>;
  if (error) return `Error!: ${error}`;
  
  return (
 
      <Grid container direction="row" justify="flex-start" >
          <Grid item xs={12} style={{ height:"60px", paddingTop:"32px"}} >
            <CustomSpan>General Information</CustomSpan>
          </Grid>
          <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}} >
            <CustomSpanInformation  >Eye Color:</CustomSpanInformation>
          </Grid>
          <Grid item xs={4} style={{ height:"49px", display:"flex",justifyContent:"flex-end", alignItems:"center"}}>
            <CustomSpan> 
            {data.person.eyeColor}
            </CustomSpan>
          </Grid>
          <Grid item xs={12}  >
            <Divider/>
          </Grid>
          <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}}>
            <CustomSpanInformation  >Hair Color:</CustomSpanInformation>
          </Grid>
          <Grid item xs={4} style={{ height:"49px", display:"flex", justifyContent:"flex-end",alignItems:"center"}}>
            <CustomSpan> 
              {data.person.hairColor}
            </CustomSpan>
          </Grid>
          <Grid item xs={12}  >
            <Divider/>
          </Grid>
          <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}} >
            <CustomSpanInformation  >Skin Color:</CustomSpanInformation>
          </Grid>
          <Grid item xs={4} style={{ height:"49px", display:"flex",justifyContent:"flex-end", alignItems:"center"}}>
            <CustomSpan> 
              {data.person.skinColor}
            </CustomSpan>
          </Grid>
          <Grid item xs={12}  >
            <Divider/>
          </Grid>
          <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}} >
            <CustomSpanInformation  >Birth Year:</CustomSpanInformation>
          </Grid>
          <Grid item xs={4} style={{ height:"49px", display:"flex", justifyContent:"flex-end",alignItems:"center"}}>
            <CustomSpan> 
              {data.person.birthYear}
            </CustomSpan>
          </Grid>
          <Grid item xs={12}  >
            <Divider/>
          </Grid>
      </Grid>

  );
}

export const PeopleDetail =() =>{
    const {id}=useParams()
    const history=useHistory()
    const irPaginaInicio=()=>{
      history.push(`/people`)
    }
  return(
    <ContainerLayout text={""}>
          <ApolloProvider client={client}>
            <PersonalInformation id={id} />
          </ApolloProvider>
    </ContainerLayout>
  )
}
export default PeopleDetail;