import './App.css';
import { React, useState, useEffect } from 'react';
import AssessmentCard from './components/AssessmentCard';
import { createTheme, ThemeProvider } from '@mui/material';
import WelcomeCard from './components/WelcomeCard';
import ResultsCard from './components/ResultsCard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5',
    }
  },
});

function App() {
  const [details, setDetails] = useState([]);
  const [counter, setCounter] = useState(-1);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);

  function fetchDetails() {
    fetch('http://localhost:3002/api/assessments/details')
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(err => console.error(err));
  }

  function fetchResults() {
    fetch('http://localhost:3002/api/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({answers: answers})
    })
    .then(response => response.json())
    .then(data => setResults(data))
    .catch(err => console.error(err));

    setCounter(counter + 1);
  }

  function renderState() {
    if (counter === -1) {
      return WelcomeCard(setCounter);
    } else if (counter === details.content.sections[0].questions.length) {
      return fetchResults() && ResultsCard(results, setCounter, setResults, setAnswers);
    } else if (counter >= details.content.sections[0].questions.length) {
      return (
        ResultsCard(results, setCounter, setResults, setAnswers)
      );
    }
    else {
      return (
        <AssessmentCard 
          details={details}
          counter={counter}
          setCounter={setCounter}
          results={answers}
          setResults={setAnswers}
        />
      );
    }
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {renderState()}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
