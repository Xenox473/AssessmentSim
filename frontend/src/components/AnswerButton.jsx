import { Button } from "@mui/material";

const AnswerButton = ({ 
  answer,
  questionId,
  handleClick
}) => {
  return (
    <Button variant="contained" color="primary" onClick={() => handleClick(questionId, answer.value)}>
      {answer.title}
    </Button>
  );
}

export default AnswerButton;