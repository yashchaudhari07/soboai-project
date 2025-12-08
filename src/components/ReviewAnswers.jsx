import React from 'react';

export default function ReviewAnswers({ area, answers }) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Review Your Answers</h2>
      {Object.values(answers).map((answer, i) => (
        <div key={i} className="bg-gray-100 p-4 mb-4 rounded">
          <p className="font-semibold">Q{i + 1}</p>
          <p className="text-gray-700 mt-1">{answer}</p>
        </div>
      ))}
      <p className="mt-6 font-medium text-blue-600">
        Once you submit, our expert analysts will review your answers and deliver personalized insights within minutes.
      </p>
    </div>
  );
}
