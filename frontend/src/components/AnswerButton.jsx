import { Button } from "@mui/material";

const AnswerButton = ({ answer, questionId, handleClick }) => {
  const style = {
    width: '40%',
    minWidth: '250px',
  };

  return (
    <Button variant="contained" sx={style} color="primary" onClick={() => handleClick(questionId, answer.value)}>
      {answer.title}
    </Button>
  );
}

export default AnswerButton;
