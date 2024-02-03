import React, { useState } from "react";

const AssessmentSection = ({ title, questions, onScoreChange }) => {
  const [responses, setResponses] = useState(Array(questions.length).fill(0));

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
    onScoreChange(
      title.toLowerCase(),
      newResponses.reduce((total, response) => total + response, 0)
    );
  };

  return (
    <div className="my-4 text-white mx-auto text-center">
    <h2 className="text-lg font-bold text-success" style={{ fontWeight: 600, fontSize: '2.2rem' }}>{title} Assessment</h2>

      {questions.map((question, index) => (
        <div key={index} className="my-3">
          <p>{question}</p>
          <select
            value={responses[index]}
            onChange={(e) =>
              handleResponseChange(index, parseInt(e.target.value, 10))
            }
            className="p-2 border border-gray-300 rounded-md text-black" style={{ width: '500px'}}
          >
            <option value="0">0 - Not at all</option>
            <option value="1">1 - Several days</option>
            <option value="2">2 - More than half the days</option>
            <option value="3">3 - Nearly every day</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default function MentalHealthAssessment() {
  const [depressionScore, setDepressionScore] = useState(null);
  const [anxietyScore, setAnxietyScore] = useState(null);
  const [adhdScore, setAdhdScore] = useState(null);

  const handleScoreChange = (assessmentType, score) => {
    switch (assessmentType) {
      case "depression":
        setDepressionScore(score);
        break;
      case "anxiety":
        setAnxietyScore(score);
        break;
      case "adhd":
        setAdhdScore(score);
        break;
      default:
        break;
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl p-4 bg-black text-white">
      <h1 className="text-center text-2xl sm:text-5xl py-5 font-medium text-success">
        Mental Health Assessment
      </h1>
      <div className="mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
  {true && (
      <div className="text-danger">
        <p>Depression Score: {depressionScore}</p>
        <p>Anxiety Score: {anxietyScore}</p>
        <p>ADHD Score: {adhdScore}</p>
        {/* You can add logic here to interpret the combined scores if needed */}
      </div>
  )}
</div>

      <AssessmentSection
        title="Depression"
        questions={[
          "I have been feeling overwhelmed or anxious.",
          "I have experienced significant changes in my appetite or weight.",
          "I have trouble sleeping or sleeping too much.",
          "I have lost interest in activities I used to enjoy.",
          "I have difficulty concentrating or making decisions.",
          "I have thoughts of self-harm or suicide.",
          "I feel a persistent sadness or emptiness.",
        ]}
        onScoreChange={handleScoreChange}
      />

      <AssessmentSection
        title="Anxiety"
        questions={[
          "I feel nervous, anxious, or on edge.",
          "I have trouble relaxing.",
          "I am easily annoyed or irritable.",
          "I have a sense of impending doom.",
          "I have muscle tension.",
          "I have difficulty controlling worrying thoughts.",
          "I avoid social situations because of fear.",
        ]}
        onScoreChange={handleScoreChange}
      />

      <AssessmentSection
        title="ADHD"
        questions={[
          "I have difficulty staying focused on tasks.",
          "I am forgetful in daily activities.",
          "I have trouble organizing tasks and activities.",
          "I avoid or delay in starting tasks that require sustained mental effort.",
          "I am easily distracted by unrelated stimuli.",
          "I frequently make careless mistakes.",
          "I have difficulty following through on tasks.",
        ]}
        onScoreChange={handleScoreChange}
      />

  
    </div>
  );
}
