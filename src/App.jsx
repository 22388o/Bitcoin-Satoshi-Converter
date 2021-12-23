import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import HomePage from "./components/pages/HomePage";
import TestPage from "./components/pages/TestPage";
import SettingsPage from "./components/pages/SettingsPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import CenteredTextAppBar from "./CenteredTextAppBar";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const appliedTheme = createTheme(isDarkTheme ? dark : light);

  React.useEffect(() => {
    setIsDarkTheme(JSON.parse(window.localStorage.getItem('isDarkTheme')));
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <CenteredTextAppBar useStateCallback={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        </Container>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </ThemeProvider>
  );
}

const FooterComponent = () => {
  return (
    <footer>
      <Container maxWidth="md">
        <Paper>
          <Box p={2} m={2} textAlign="center">
            <Typography variant="body1" color="inherit">1 Bitcoin kann 100 Millionen Mal geteilt werden!</Typography>
            <Typography variant="body1" color="inherit">Daraufhin erhält man einen Satoshi.</Typography>
          </Box>
        </Paper>
      </Container>
    </footer>
  );
};

export const light = {
  palette: {
    type: 'light',
    primary: {
      main: '#FF9800',
    },
    secondary: {
      main: '#008000',
    },
  },
};
export const dark = {
  palette: {
    type: 'dark',
    primary: {
      main: '#FF9800',
    },
    secondary: {
      main: '#008000',
    },
  },
};