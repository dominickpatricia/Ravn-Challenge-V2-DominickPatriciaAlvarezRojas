
import {useHistory, useParams} from "react-router";
import ButtonStyle from "../layaout/ButtonStyle";
export const PeopleDetail =() =>{
    const {id}=useParams()
    const history=useHistory()

    const irPaginaInicio=()=>{
        history.push(`/people`)
  }
  return(
    <ButtonStyle text={"Volver"} onClick={()=>irPaginaInicio()}/>
  )
}
export default PeopleDetail;