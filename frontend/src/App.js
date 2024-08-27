import './App.css';
import { React, useState, useEffect } from 'react';
import AssessmentCard from './components/AssessmentCard';

function App() {
  const [details, setDetails] = useState([]);

  function fetchDetails() {
    fetch('http://localhost:3002/api/assessments/details')
      .then(response => response.json())
      .then(data => setDetails(data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <AssessmentCard details={details} />
      </header>
    </div>
  );
}

export default App;
