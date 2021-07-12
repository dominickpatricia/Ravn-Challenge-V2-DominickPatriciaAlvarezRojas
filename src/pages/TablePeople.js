import React from "react";
import ButtonStyle from "../layaout/ButtonStyle";
import {useHistory} from "react-router";
import {TableCellCustom, TableCellCustom2, TableContainerCustom, TableRowCustom} from "../layaout/Tablas";
import {
  Table,
  TableBody,
  TableHead,
  TablePagination,
  TableRow
} from "@material-ui/core";
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
  
  const GET_PEOPLE = gql` { allPeople{ people { id name } } }`;
  
  export const TablePeople = ({ onPeopleSelected }) =>  {
    const history=useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { loading, error, data } = useQuery(GET_PEOPLE);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, !loading && data?.allPeople?.people.length - page * rowsPerPage);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };
    const labelOfPagina=(from,to,count)=>{
        return `${from}-${to} de ${count !== -1 ? count : `more than ${to}`}`
    };
    
    console.log(onPeopleSelected);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    
    const irADetalle = (codigo) => {
        history.push(`/detalle/`+codigo);
    };

    return (
    <React.Fragment>
    {
    data?.allPeople?.people?.length>0
    ?<TableContainerCustom>
        <Table>
            <TableHead>
            <TableRow>
                <TableCellCustom align="center">Usuario</TableCellCustom>
                <TableCellCustom align="center">Detalle</TableCellCustom>
            </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage>0
                ? (data?.allPeople?.people.slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage))
                : (data?.allPeople?.people)).map((person,index) => (
                <TableRowCustom key={person.name}>
                    <TableCellCustom2  align="center" component="th" scope="row">
                        {person.name}
                    </TableCellCustom2>
                    <TableCellCustom2 align="center"><ButtonStyle text={"Ver"} onClick={()=>irADetalle(person.id)}/></TableCellCustom2>
                </TableRowCustom>
            ))}
            {emptyRows > 0 && (
                <TableRow style={{ height: 70 * emptyRows }}>
                <TableCellCustom2 colSpan={6} />
                </TableRow>
             )}
            </TableBody>
            <TablePagination
            rowsPerPageOptions={[5,10]}
            colSpan={3}
            count={data?.data?.pedidos.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage={"Pedidos por página"}
            labelDisplayedRows={()=>labelOfPagina(page*(rowsPerPage)+1,((page+1)*(rowsPerPage)>!loading && data?.allPeople?.people.length)? !loading && data?.allPeople?.people.length:(page+1)*(rowsPerPage),!loading && data?.allPeople?.people.length)}
            />
            </Table>
            </TableContainerCustom>
            :<div style={{display:"flex",justifyContent:"center",alignContent:"center"}}><span style={{fontWeight:"bolder",marginTop:"100px"}}>Aún no se han registrado pedidos</span></div>
            }
        </React.Fragment>
    );
  }
  export default TablePeople;