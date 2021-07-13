import React from "react";
import styled from "styled-components";


const Container=styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

const ContentContainer=styled.div`

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.palette.claro};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: ${(props) => props.theme.palette.complementario};
  }

  /*::-webkit-scrollbar-thumb:hover {
    //background: ${(props) => props.theme.palette.secundario};
  }*/
  //padding: 0px 50px 35px 50px;
  padding-left: 50px;
  height: calc(91vh - 70px - 35px);
  overflow: auto;
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
