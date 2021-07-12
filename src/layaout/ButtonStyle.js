import React from "react";
import styled from "styled-components";
import {Button} from "@material-ui/core";

const ButtonCustom=styled(Button)`
  background: ${(props => props.theme.palette.secundario)} !important;
  border: 1px solid ${(props => props.theme.palette.oscuro)} !important;
  border-radius: 2px !important;
  box-shadow: 0 3px 5px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
`;

const SpanCustom=styled.span`
  color: ${(props => props.theme.palette.principal)};
  font-family: ${(props => props.theme.typography.fontFamily.nunito)};
  font-weight: bolder;
`;

const ImgCustom=styled.img`
  max-height: 25px;
  max-width: 25px;
  margin-right: 15px;
`;

const ButtonStyle=({icon,text,onClick,style})=>{

  return(
    <ButtonCustom variant="contained" color="secondary" onClick={onClick} style={style}>
      {icon && <ImgCustom src={icon}/>}
      <SpanCustom>{text}</SpanCustom>
    </ButtonCustom>
  )
}

export default ButtonStyle
