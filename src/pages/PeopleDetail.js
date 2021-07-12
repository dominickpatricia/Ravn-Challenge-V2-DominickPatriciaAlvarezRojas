
import {useHistory, useParams} from "react-router";
import ButtonStyle from "../layaout/ButtonStyle";
import { Button, Grid, Divider, Card} from "@material-ui/core";
import styled from "styled-components";
import Loader from "../layaout/Loader";
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
  font-family: ${(props) => props.theme.typography.fontFamily.nunito};
  font-size: 20px;
  font-weight: bolder;
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
      <Grid container direction="row" justify="flex-start" alignItems="center" >
        <Card style={{ marginTop:"20px", marginBottom:"20px", width:"100%"}}>
         
            <Grid item xs={1}/>
          <Grid item xs={5} style={{ marginLeft: "30px", marginTop:"20px", marginBottom:"20px"}} >
            <CustomSpan  >Calles</CustomSpan>
            <h1> 
              {data.person.name} 
            </h1> 
          </Grid>
          <Grid item xs={5} style={{marginLeft: "25px", marginRight: "20px", marginTop:"20px", marginBottom:"20px"}}>
            <CustomSpan>Pedidos</CustomSpan>
            <button onClick={() => refetch()}>Refetch!</button>
          </Grid>
            <Grid item xs={1}/>
          
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
          textAlign: "center",display:"flex",justifyContent:"center", alignItems:"center"
        }}>
          <h1> Información Persona </h1>
      </Grid>
      <Grid item xs={9}></Grid>
      <Grid item xs={3} style = {{ height: "50px",
          textAlign: "center",display:"flex",justifyContent:"center", alignItems:"center"
        }}>
          <ButtonStyle text={"Volver"} onClick={()=>irPaginaInicio()}/>
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