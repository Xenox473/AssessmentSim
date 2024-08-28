import { Box, LinearProgress, Stack } from '@mui/material';
import QuestionWrapper from './QuestionWrapper';
import { boxStyles } from './boxStyles';
import { useEffect, useState } from 'react';

const AssessmentCard = ({ completeAssessment, responses, setResponses }) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [assessmentData, setAssessmentData] = useState([]);

  function fetchAssessmentData() {
    fetch('http://localhost:3002/api/assessments/data')
      .then(response => response.json())
      .then(data => setAssessmentData(data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchAssessmentData();
  }, []);

  if (!assessmentData?.content?.sections) return null;

  const section = assessmentData.content.sections[0];
  const { questions, answers } = section;

  function handleAnswerClick(questionId, answer) {
    setResponses([
      ...responses,
      {
        question_id: questionId,
        value: answer
      }
    ]);

    if (activeQuestionIndex === questions.length - 1) {
      completeAssessment();
    } else {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    }
  };

  return (
    <Box sx={boxStyles}>
      <Stack spacing={3} justifyContent="space-evenly">
        <h2 style={{ textAlign: 'left' }}> Assessment: {assessmentData.content.display_name} </h2>
        <p style={{ textAlign: 'left' }}> {section.title} </p>
        <QuestionWrapper
          question={questions[activeQuestionIndex]}
          answers={answers}
          handleClick={handleAnswerClick}
        />
        <LinearProgress
          variant="determinate"
          value={(activeQuestionIndex) / questions.length * 100}
          sx={{height: '5px', borderRadius: 3}}
        />
        <div style={{ textAlign: 'right' }}>
          Question {activeQuestionIndex + 1} out of {questions.length}
        </div>
      </Stack>
    </Box>
  );
}

export default AssessmentCard;
