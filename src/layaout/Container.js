import React from "react";
import styled from "styled-components";

const Container=styled.div`
  position: absolute;
    left: 450px;
    top: 52px;
    width:890px;
`;
const ContentContainer=styled.div`
  overflow: auto;
  width:890px;
  height:890px;
`;

const ContainerLayout=({text,children})=>{
  return(
    <Container>
      <ContentContainer>
        {children}
      </ContentContainer>
    </Container>
  )
}
export default ContainerLayout
