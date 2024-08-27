import { Box, Stack, Button, CircularProgress } from "@mui/material";

const ResultsCard = (results, setCounter, setResults, setAnswers) => {
  function renderResults() {
    if (results.results) {
      return (
        <p> Your results: { results.results.join(", ") } </p>
      );
    } else {
      return (
        <>
          <CircularProgress />
        </>
      );
    } 
  }

  function reset() {
    setCounter(0);
    setResults([]);
    setAnswers([]);
  }

  return (
    <Box flex sx={{ padding: 2, backgroundColor: '#FFFFFF', borderRadius: 1, width: '40%', fontSize: '1.1rem' }}>
      <Stack spacing={3}>
       <h1> Assessment Results </h1>
        { renderResults() }
        <Button variant="contained" color="primary" onClick={() => reset()}>
          Restart
        </Button>
      </Stack>
    </Box>
  );
}

export default ResultsCard;