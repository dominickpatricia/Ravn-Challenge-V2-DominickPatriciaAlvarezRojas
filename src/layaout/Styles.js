import styled from "styled-components";
const CustomSpan= styled.span`
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
const CustomSpanLight= styled.span`
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
  color: #828282;
`;
const CustomSpanFailed= styled.span`
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
  color: #EC5757;
`;
const CustomSpanTitle= styled.span`
  position: absolute;
  height: 20px;
  left: 33px;
  top: 16px;
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
  color: #F2F2F2;
`;
const NavbarStyled=styled.div`
  position: absolute;
  width: 1440px;
  height: 52px;
  left: 0px;
  top: 0px;
  background: #121212;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
const MenuSubTitleSpan = styled.span`
  //position: absolute;
  position: absolute;
  left:14.93px;
  padding-top: 18px;
  font-size: 14px !important;
  color: #828282 !important;
  line-height: 17px !important;
  font-weight: normal !important;
  `;

export  {CustomSpan, CustomSpanLight, CustomSpanTitle,NavbarStyled,MenuSubTitleSpan,CustomSpanFailed};