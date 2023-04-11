//External deps
import React, { useEffect } from "react";
import {
  createTheme,
  StyledEngineProvider,
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';

//Internal deps
import PostsProvider from "../../../context/Posts";
import Router from "../../../routes/Router";
import { blue, deepOrange } from '@mui/material/colors';

//Local deps
import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'react-posts';
  }, []);
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        light: '#0059B2',
        main: blue[800],
        // main: deepOrange[900],
        dark: '#0059B2',
        contrastText: '#fff',
      },
      background: {
        default: '#0A1929',
        paper: '#1D2332',
      },
      secondary: {
        main: '#242838',
      },
      error: {
        main: '#E71C59'
      },
      warning: {
        main: deepOrange[900],
      },
      text: {
        main: '#ffffff',
      }
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={extendTheme(theme)}>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default App;
