import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const QuizPage = () => {
  const { topic } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [isLocked, setIsLocked] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    axios.get('/api/questions') // Make sure to add your backend URL
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error("Error fetching questions:", err);
      });
  }, [topic]);

  const handleOptionClick = (option) => {
    if (isLocked) return;
    const updatedAnswers = [...userAnswers];
    updatedAnswers[current] = option;
    setUserAnswers(updatedAnswers);
    setIsLocked(true);

    const correctAnswer = questions[current].answer.trim().toLowerCase();
    const isCorrect = option.trim().toLowerCase() === correctAnswer;

    setFeedback(prev => [...prev, { selected: option, isCorrect }]);
    if (current === questions.length - 1) {
      setShowSubmit(true); // Show Submit button when the last question is answered
    }
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setIsLocked(false); // Unlock the next question
    }
  };

  const submitQuiz = () => {
    axios.post('/api/submit', userAnswers)
      .then((res) => {
        setScore(res.data.score);
        setFeedback(res.data.results);
      })
      .catch((err) => {
        console.error("Error submitting quiz:", err);
      });
  };

 

  if (!questions.length) return <p className="text-white text-center mt-20">Loading...</p>;

  const q = questions[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-4 py-6 sm:px-8">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-300">
          Question {current + 1} of {questions.length}
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center">{q.question}</h3>

        <div className="space-y-4">
          {q.options.map((opt, i) => {
            let buttonClass = 'w-full font-medium py-3 px-4 rounded-lg shadow-md border transition-all duration-300';

            if (isLocked) {
              if (opt.trim().toLowerCase() === q.answer.trim().toLowerCase()) {
                buttonClass += ' bg-green-500 border-green-700';
              } else if (opt.trim().toLowerCase() === userAnswers[current]?.trim().toLowerCase()) {
                buttonClass += ' bg-red-500 border-red-700';
              } else {
                buttonClass += ' bg-white/10 border-gray-500';
              }
            } else {
              buttonClass += ' bg-white/10 border-gray-500 hover:bg-white/20 cursor-pointer';
            }

            return (
              <button
                key={i}
                onClick={() => handleOptionClick(opt)}
                disabled={isLocked}
                className={buttonClass}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {isLocked && (
          <div className="mt-6 text-center">
            {showSubmit && current === questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>

      {score !== null && (
    <div className="bg-white text-black p-5 shadow-md rounded-lg mt-6 w-full max-w-2xl">
      <h2 className="text-xl font-bold text-center mb-4">
        Your Score: {score}/{questions.length}
      </h2>
      {feedback.map((item, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">Q{index + 1}. {questions[index].question}</h3>
          <p>
            Your Answer:{" "}
            <span className={`${item.isCorrect ? "text-green-600" : "text-red-600"}`}>
              {item.selected}
            </span>
          </p>
          {!item.isCorrect && (
            <p>Correct Answer: <span className="text-green-700">{questions[index].answer}</span></p>
          )}
          <hr className="my-2" />
        </div>
      ))}
    </div>
  )}
  
    </div>
  );
};

export default QuizPage;
