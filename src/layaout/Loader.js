import styled from "styled-components";
import {CircularProgress} from "@material-ui/core";
import React from "react";


const LoaderContainer=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
  .MuiCircularProgress-colorPrimary{
    color: ${props => props.theme.palette.principal};
  } 
`;

const Loader=()=>{
  return(
    <LoaderContainer>
      <CircularProgress/>
    </LoaderContainer>
  )
}

export default Loader;
