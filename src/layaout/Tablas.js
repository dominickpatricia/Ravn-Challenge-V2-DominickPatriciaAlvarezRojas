import styled from "styled-components";
import {TableCell, TableContainer, TableRow} from "@material-ui/core";

const TableContainerCustom=styled(TableContainer)`
  margin-top: 50px !important;
  border: 2px solid ${(props => props.theme.palette.gris)} !important;
`;

const TableCellCustom=styled(TableCell)`
  background: ${(props => props.theme.palette.principal)} !important;
  color: ${(props => props.theme.palette.claro)} !important;
  font-family:${(props => props.theme.typography.fontFamily.nunito)} !important ;
  font-weight: bolder;
  font-size: 16px !important;
`;

const TableCellCustom2=styled(TableCell)`
  font-family:${(props => props.theme.typography.fontFamily.nunito)} !important ;
  font-weight: bolder;
  font-size: 16px !important;
  max-width: 50px !important;
`;

const TableRowCustom=styled(TableRow)`
  height: 70px !important;
  &:nth-of-type(odd) {
    background-color: ${(props => props.theme.palette.claro)};
  }

  &:nth-of-type(even) {
    background-color: ${(props => props.theme.palette.gris)};
  }
`

export {TableContainerCustom,TableCellCustom,TableCellCustom2,TableRowCustom}
