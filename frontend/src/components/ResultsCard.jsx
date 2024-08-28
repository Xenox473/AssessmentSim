import { Box, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { boxStyles } from "./boxStyles";

const ResultsCard = ({ answers, resetAssessment }) => {
  const [results, setResults] = useState();
  
  function fetchResults() {
    fetch('http://localhost:3002/api/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({answers: answers})
    })
    .then(response => response.json())
    .then(data => setResults(data.results))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchResults();
  }, []);

  function renderResults() {
    if (!results) return <p> Assessing... </p>;
    return <p> Your results: { results.join(", ") } </p>
  }

  return (
    <Box sx={boxStyles}>
      <Stack spacing={3}>
       <h2> Assessment Results </h2>
        { renderResults() }
        <Button variant="contained" color="primary" onClick={resetAssessment}>
          Restart Assessment
        </Button>
      </Stack>
    </Box>
  );
}

export default ResultsCard;