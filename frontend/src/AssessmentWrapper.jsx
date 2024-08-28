import { useState, useEffect } from 'react';
import AssessmentCard from './components/AssessmentCard';
import ResultsCard from './components/ResultsCard';
import WelcomeCard from './components/WelcomeCard';

const AssessmentWrapper = () => {
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

  useEffect(() => {
    fetchDetails();
  }, []);

  if (counter === -1) {
    return <WelcomeCard setCounter={setCounter} />;
  }
  if (counter === details.content.sections[0].questions.length) {
    return fetchResults() && <ResultsCard results={results} setCounter={setCounter} setResults={setResults} setAnswers={setAnswers} />;
  }
  if (counter >= details.content.sections[0].questions.length) {
    return (
      <ResultsCard results={results} setCounter={setCounter} setResults={setResults} setAnswers={setAnswers} />
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

export default AssessmentWrapper;