import React, { useState, useMemo, createContext } from 'react';
import { Header, Converter, Footer } from './components';
import FAQ from './components/FAQ';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
              background: {
                default: '#1a1a1a',
                paper: '#242424',
              },
              primary: {
                main: '#90caf9',
              },
            }
            : {
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
              primary: {
                main: '#1976d2',
              },
            }),
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%' }}>
          <Header />
          <Converter />
          <FAQ />
          <Footer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
