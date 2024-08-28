import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { LinearProgress } from '@mui/material';
import { Divider } from '@mui/material';

import Questioner from './Questioner';

const AssessmentCard = ({ details, counter, setCounter, results, setResults }) => {

  useEffect(() => {
    console.log(results);
  }, [results]);

  if (details.length === 0) {
    return <p> Loading... </p>;
  }

  const section = details.content.sections[0];
  const questions = section.questions;
  const answers = section.answers;

  function handleAnswerClick(questionId, answer) {
    setResults([...results, {"question_id": questionId, "value": answer}]);
    setCounter(counter + 1);
  };

  return (
    <Box flex sx={{ padding: 2, backgroundColor: '#FFFFFF', borderRadius: 1, width: '40%', fontSize: '1.1rem' }}>
      <Stack spacing={3} justifyContent={'space-evenly'}>
        <p style={{ textAlign: 'left' }}> Assessment: {details.content.display_name} </p>
        <p style={{ textAlign: 'left' }}> {section.title} </p>
        <Divider textAlign='right' border='1px solid'> {counter + 1} out of {questions.length} </Divider>
        <Questioner
          question={questions[counter]}
          answers={answers}
          handleClick={handleAnswerClick}
        />
        <LinearProgress variant="determinate" value={(counter)/questions.length * 100} sx={{height: '10px', borderRadius: 3}}/>
      </Stack>
    </Box>
  );
}

export default AssessmentCard;