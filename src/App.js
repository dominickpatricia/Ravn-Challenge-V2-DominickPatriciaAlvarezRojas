import './App.css';
import React from "react";
import AppRouter from "./routes/AppRouter";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "styled-components";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme= createMuiTheme({
      palette:{
        principal: "#24282C",
        secundario: "#F3C933",
        complementario: "#333F42",
        oscuro:"#333742",
        claro:"#ffffff",
        gris:"#C4C4C4"
      },
      rutas:{
        recorrido:"#fff100" ,
        noRecorrido:"#4d5fbd70"
      },
      typography:{
        fontFamily: {
          montserrat: "'Montserrat', sans-serif",
          nunito: "'Nunito', sans-serif",
          roboto: "'Roboto', sans-serif",
        }
      }
})

toast.configure()
function App() {
  return (
    <ThemeProvider theme={theme} >
      <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
