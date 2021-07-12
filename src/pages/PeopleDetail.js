
import {useHistory, useParams} from "react-router";
import ButtonStyle from "../layaout/ButtonStyle";
import { Grid, Divider, Card} from "@material-ui/core";
import styled from "styled-components";
import Loader from "../layaout/Loader";
import Back from "../icons/backWhite.png"
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
  query person($id: ID){person(id:$id){name eyeColor hairColor skinColor birthYear height mass gender  homeworld {
    name
    gravity
  }}}
`;
const CustomSpan=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-size: 20px;
  font-weight: bolder;
`;
const CustomSpanSubtitle=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-size: 28px;
  font-weight: bolder;
`;
const CustomSpanInformation=styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.Helvetica};
  font-size: 20px;
  font-weight: lighter;
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
    <div style={{padding:"10% 16% 0 16%"}}>
    {!loading?
      <Grid container direction="row" justify="flex-start" >
        <Card style={{ marginTop:"30%", marginBottom:"20px", width:"800px"}}>
          <Grid item xs={6} style={{ paddingLeft:"5%" ,marginTop:"3%", display:"flex"}} >
            <CustomSpan  >Name:</CustomSpan>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12} style={{paddingLeft:"5%",display:"flex"}} >
            <CustomSpanInformation> 
              {data.person.name} 
            </CustomSpanInformation> 
          </Grid>
          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft:"5%" ,marginTop:"3%",  display:"flex"}} >
            <CustomSpan  >Gender:</CustomSpan>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}  style={{paddingLeft:"5%", display:"flex"}} >
            <CustomSpanInformation> 
              {data.person.gender} 
            </CustomSpanInformation> 
          </Grid>
          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>
          <Grid item xs={12} style={{  marginTop:"3%",  display:"flex"}} >
            <CustomSpan style={{ paddingLeft:"5%"}} >HomeWorld:</CustomSpan>
            <CustomSpan style={{ paddingLeft:"22%"}} >Gravity:</CustomSpan>
          </Grid>

          <Grid item xs={12}  style={{display:"flex"}} >
            <CustomSpanInformation style={{ paddingLeft:"5%"}} > {data.person.homeworld.name} </CustomSpanInformation>
            <CustomSpanInformation style={{ paddingLeft:"29%"}} > {data.person.homeworld.gravity} </CustomSpanInformation>
          </Grid>

          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>
          <Grid item xs={12} style={{  marginTop:"3%",  display:"flex"}} >
            <CustomSpan style={{ paddingLeft:"5%"}} >Height :</CustomSpan>
            <CustomSpan style={{ paddingLeft:"27%"}} >Mass:</CustomSpan>
          </Grid>

          <Grid item xs={12}  style={{display:"flex"}} >
            <CustomSpanInformation style={{ paddingLeft:"5%"}} > {data.person.height} </CustomSpanInformation>
            <CustomSpanInformation style={{ paddingLeft:"34%"}} > {data.person.mass} </CustomSpanInformation>
          </Grid>

          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>

          <Grid item xs={12} style={{  marginTop:"3%",  display:"flex"}} >
            <CustomSpan style={{ paddingLeft:"5%"}} >EyeColor:</CustomSpan>
            <CustomSpan style={{ paddingLeft:"25%"}} >HairColor:</CustomSpan>
            <CustomSpan  style={{ paddingLeft:"25%"}}  >SkinColor:</CustomSpan>
          </Grid>

          <Grid item xs={12}  style={{ display:"flex"}} >
            <CustomSpanInformation style={{ paddingLeft:"5%"}} > {data.person.eyeColor} </CustomSpanInformation>
            <CustomSpanInformation style={{ paddingLeft:"32%"}} > {data.person.hairColor} </CustomSpanInformation>
            <CustomSpanInformation  style={{ paddingLeft:"31%"}} > {data.person.skinColor} </CustomSpanInformation>
          </Grid>

          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft:"5%" ,marginTop:"3%",  display:"flex"}} >
            <CustomSpan  >Birth Year:</CustomSpan>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}  style={{paddingLeft:"5%", display:"flex"}} >
            <CustomSpanInformation> 
              {data.person.birthYear} 
            </CustomSpanInformation> 
          </Grid>
          <Grid item xs={12} style={{marginTop: "1%"}} >
            <Divider/>
          </Grid>
          <Grid item xs={12} style={{}} >
            <Divider/>
          </Grid>
        </Card>
      </Grid>
    :<Loader/>
    }
    </div>
  );
}

export const PeopleDetail =() =>{
    const {id}=useParams()
    const history=useHistory()
    const irPaginaInicio=()=>{
      history.push(`/people`)
    }
  return(
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item xs={12} style = {{height: "50px",
          textAlign: "center",display:"flex",justifyContent:"center", alignItems:"center", paddingTop:"5%"
        }}>
          <CustomSpanSubtitle> Personal Information </CustomSpanSubtitle>
      </Grid>
      <Grid item xs={9}></Grid>
      <Grid item xs={3} style = {{ height: "50px",
          textAlign: "center",display:"flex",justifyContent:"center", alignItems:"center"
        }}>
          <ButtonStyle icon={Back} text={"Volver"} onClick={()=>irPaginaInicio()}/>
      </Grid>
      <Grid item xs={12} style = {{height: "50px",
          textAlign: "center",display:"flex",justifyContent:"center", alignItems:"center", paddingTop:"100px"
        }}>
          <ApolloProvider client={client}>
            <PersonalInformation id={id} />
          </ApolloProvider>
      </Grid>
    </Grid>
  )
}
export default PeopleDetail;