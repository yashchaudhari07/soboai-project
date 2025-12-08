import React, { useState, useEffect } from 'react';
import questions from '../data/questions';
import ReviewAnswers from './ReviewAnswers';

export default function QuestionForm({ area, onComplete }) {
  const qList = questions[area];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(() => JSON.parse(localStorage.getItem('answers')) || {});

  const handleNext = () => {
    if (!answers[step]) return alert('Please answer before continuing');
    if (step === qList.length - 1) {
      localStorage.setItem('answers', JSON.stringify(answers));
      setStep(step + 1); // move to review
    } else setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  if (step === qList.length) return <ReviewAnswers area={area} answers={answers} />;

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <p className="text-blue-600 font-medium">Step {step + 1} of {qList.length + 1}</p>
      <h2 className="text-2xl font-bold mt-2 mb-6">{area} Questions</h2>
      <p className="font-semibold">{qList[step]}</p>
      <textarea
        rows="4"
        className="w-full border mt-2 p-3 rounded-md"
        value={answers[step] || ''}
        onChange={(e) => setAnswers({ ...answers, [step]: e.target.value })}
      />

      <div className="mt-6 flex justify-between">
        <button onClick={handleBack} className="bg-blue-100 px-4 py-2 rounded">Back</button>
        <button onClick={handleNext} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}
