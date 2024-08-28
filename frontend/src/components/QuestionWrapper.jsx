import { Stack } from "@mui/material";
import AnswerButton from "./AnswerButton";

const QuestionWrapper = ({ question, answers, handleClick }) => {
  return (
    <div>
      <h3>{question.title}</h3>
      <Stack spacing={1.5} alignItems={'center'}>
      {answers.map((answer, index) => (
        <AnswerButton 
          key={`${index}-${answer.value}`}
          answer={answer} 
          questionId={question.question_id}
          handleClick={handleClick}
        />
      ))}
      </Stack>
    </div>
  );
}

export default QuestionWrapper;
