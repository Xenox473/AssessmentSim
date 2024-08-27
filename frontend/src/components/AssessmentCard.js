import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
// import Item from '@mui/material/ListItem';
import { LinearProgress } from '@mui/material';

import AnswerButton from './AnswerButton';

const AssessmentCard = ({ details }) => {
  const [ results, setResults ] = useState([]);

  useEffect(() => {
    console.log(results);
  }, [results]);

  if (details.length === 0) {
    return <p> Loading... </p>;
  }

  const section = details.content.sections[0];
  const questions = section.questions;
  const answers = section.answers;
  const question = questions[0];

  return (
    <Box flex sx={{ padding: 2, border: '5px dashed grey', width: '40%', fontSize: 15, justifyContent: 'flex-start' }}>
      <Stack spacing={3}>
        <p style={{ textAlign: 'left' }}> {details.content.display_name} </p>
        <p style={{ textAlign: 'left' }}> {section.title} </p>
        <p> {question.title} </p>
        {answers.map((answer, index) => (
          <AnswerButton 
            key={index}
            answer={answer} 
            questionId={question.question_id}
            results={results}
            setResults={setResults}
          />
        ))}
        <LinearProgress variant="determinate" value={1/8*100} />
      </Stack>
    </Box>
  );
}

export default AssessmentCard;