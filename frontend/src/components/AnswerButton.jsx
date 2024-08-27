import { Button } from "@mui/material";

const AnswerButton = ({ 
  answer,
  questionId,
  handleClick
}) => {
  const style = {
    width: '50%'    
  };

  
  return (
    <Button variant="contained" style={style} color="primary" onClick={() => handleClick(questionId, answer.value)}>
      {answer.title}
    </Button>
  );
}

export default AnswerButton;