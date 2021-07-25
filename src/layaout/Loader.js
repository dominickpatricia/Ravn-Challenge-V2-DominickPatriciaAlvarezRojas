import React from "react";
import styled from "styled-components";
import {CustomSpanLight} from "../layaout/Styles"
import {Ripple} from "../layaout/Ripple";

const LoaderContainer=styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .MuiCircularProgress-colorPrimary{
    color: ${props => props.theme.palette.principal};
  } 
`;

const Loader=()=>{
  return(
    <LoaderContainer>
      <Ripple />  
      <CustomSpanLight style={{paddingLeft:"8px"}}>Loading </CustomSpanLight>
    </LoaderContainer>
  )
}

export default Loader;
