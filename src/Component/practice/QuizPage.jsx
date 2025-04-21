import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizPage = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]); // To store feedback for each question (green or red)

  useEffect(() => {
    fetch('/api/questions') // or `/api/questions/${topic}` if topic-wise
      .then(res => res.json())
      .then(data => setQuestions(data));
  }, [topic]);

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers, answer];
    const correctAnswer = questions[current].answer;
    const isCorrect = answer === correctAnswer;
    const newFeedback = [...feedback, isCorrect ? 'correct' : 'incorrect'];

    setUserAnswers(newAnswers);
    setFeedback(newFeedback);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnswers)
      })
        .then(res => res.json())
        .then(data => setScore(data.score));
    }
  };

  if (score !== null) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white px-6">
        <div className="bg-white/10 p-10 rounded-xl shadow-lg text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-purple-300">🎉 Quiz Complete!</h1>
          <p className="text-xl">Your Score:</p>
          <p className="text-5xl font-bold text-green-400 mt-2">{score} / {questions.length}</p>
        </div>
      </div>
    );
  }

  if (!questions.length) return <p className="text-white text-center mt-20">Loading...</p>;

  const q = questions[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-4">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-300">
          Question {current + 1} of {questions.length}
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center">{q.question}</h3>
        <div className="space-y-4">
          {q.options.map((opt, i) => {
            // Determine the button background based on the feedback
            let buttonClass = 'w-full hover:bg-purple-600 transition-colors duration-200 text-white font-medium py-3 px-4 rounded-lg shadow-md';
            
            // If the option is correct, set green background
            if (feedback[current] === 'correct' && opt === q.answer) {
              buttonClass += ' bg-green-500';
            }
            // If the option is incorrect and was chosen, set red background
            if (feedback[current] === 'incorrect' && opt === userAnswers[current]) {
              buttonClass += ' bg-red-500';
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                className={buttonClass}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
