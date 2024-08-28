import { useState } from 'react';
import AssessmentCard from './components/AssessmentCard';
import ResultsCard from './components/ResultsCard';
import WelcomeCard from './components/WelcomeCard';

const status = {
  "IN_PROGRESS": "In Progress",
  "COMPLETED": "Completed"
}

const AssessmentWrapper = () => {
  const [responses, setResponses] = useState([]);
  const [assessmentStatus, setAssessmentStatus] = useState();

  if (!assessmentStatus) {
    return <WelcomeCard beginAssessment={() => setAssessmentStatus(status.IN_PROGRESS)} />;
  }

  if (assessmentStatus === status.COMPLETED) {
    return (
      <ResultsCard 
        answers={responses}
        resetAssessment={() => {
          setAssessmentStatus();
          setResponses([]);
        }}
      />
    );
  }

  return (
    <AssessmentCard 
      completeAssessment = {() => setAssessmentStatus(status.COMPLETED)}
      responses={responses}
      setResponses={setResponses}
    />
  );
}

export default AssessmentWrapper;
