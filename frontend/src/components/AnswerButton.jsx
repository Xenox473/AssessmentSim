import { Button } from "@mui/material";

const AnswerButton = ({ 
  answer,
  questionId,
  results,
  setResults
}) => {
  return (
    <Button variant="contained" color="primary" onClick={() => setResults([...results, {"question_id": questionId, "value": answer.value}])}>
      {answer.title}
    </Button>
  );
}

export default AnswerButton;