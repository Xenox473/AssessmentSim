import { createTheme, ThemeProvider } from '@mui/material';
import AssessmentWrapper from './AssessmentWrapper';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
});

const appStyles = {
  backgroundColor: "#EDF4ED",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Roboto', sans-serif",
  textAlign: 'center'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={appStyles}>
        <AssessmentWrapper />
      </div>
    </ThemeProvider>
  );
}

export default App;
