import { Stack } from "@mui/material";
import AnswerButton from "./AnswerButton";

const Questioner = ({
    question,
    answers,
    handleClick
}) => {
    return (
      <div>
        <h3>{question.title}</h3>
        <Stack spacing={2} alignItems={'center'}>
        {answers.map((answer, index) => (
          <AnswerButton 
            key={index}
            answer={answer} 
            questionId={question.question_id}
            handleClick={handleClick}
          />
        ))}
        </Stack>
      </div>
    );
}

export default Questioner;