
import React from "react";
import Loader from "../layaout/Loader";
import ContainerLayout from "../layaout/Container";
import Client from "../layaout/Client";
import {useParams} from "react-router";
import { Grid, Divider} from "@material-ui/core";
import {CustomSpan, CustomSpanLight} from "../layaout/Styles"
import {ApolloProvider,useQuery,gql} from "@apollo/client";
import {CustomSpanFailed} from "../layaout/Styles"

const GET_PEOPLE_BY_ID = gql`
  query person ($id: ID){ person (id:$id) { name eyeColor hairColor skinColor birthYear vehicleConnection { edges { node { name} } } } }
`;

function PersonalInformation({ id }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_PEOPLE_BY_ID,
    {
      variables: { id },
      notifyOnNetworkStatusChange: true
    }
  );
  
  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return <Loader/>;
  if (error) return (
    <Grid container direction="row" justify="flex-start" >
        <Grid item xs={12} style={{ height:"60px",display:"flex", alignItems:"center",justifyContent:"center"}} >
            <CustomSpanFailed> Failed to load data</CustomSpanFailed>
        </Grid>
    </Grid>); 
  
  return (
      <Grid container direction="row" justify="flex-start" >
          <Grid item xs={12} style={{ height:"60px", paddingTop:"32px"}} >
            <CustomSpan>General Information</CustomSpan>
          </Grid>
          <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}} >
            <CustomSpanLight  >Eye Color:</CustomSpanLight>
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
            <CustomSpanLight>Hair Color:</CustomSpanLight>
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
            <CustomSpanLight>Skin Color:</CustomSpanLight>
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
            <CustomSpanLight>Birth Year:</CustomSpanLight>
          </Grid>
          <Grid item xs={4} style={{ height:"49px", display:"flex", justifyContent:"flex-end",alignItems:"center"}}>
            <CustomSpan> 
              {data.person.birthYear}
            </CustomSpan>
          </Grid>
          <Grid item xs={12}  >
            <Divider/>
          </Grid>
          <Grid item xs={12} style={{ height:"60px", paddingTop:"32px"}} >
            <CustomSpan>Vechicles</CustomSpan>
          </Grid>
          {data.person.vehicleConnection.edges.length>0?
            data.person.vehicleConnection.edges.map((vehicle,index) => (
              <Grid container direction="row" justify="flex-start" >
                <Grid item xs={12} style={{ height:"49px", display:"flex", alignItems:"center"}} >
                  <CustomSpanLight> {vehicle.node.name}</CustomSpanLight>
                </Grid>
                <Grid item xs={12}  >
                  <Divider/>
                </Grid>
            </Grid>
          ))
          :
             <Grid item xs={8} style={{ height:"49px", display:"flex", alignItems:"center"}} >
              <CustomSpanLight>There's not vehicle</CustomSpanLight>
            </Grid>
          }
      </Grid>
  );
}

export const PeopleDetail =() =>{
  const {id}=useParams()
  return(
    <ContainerLayout text={""}>
      <ApolloProvider client={Client}>
        <PersonalInformation id={id} />
      </ApolloProvider>
    </ContainerLayout>
  )
}
export default PeopleDetail;