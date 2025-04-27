import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

const Quizereact = () => {
    const { topic } = useParams();
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(null);
    const [feedback, setFeedback] = useState([]);
    const [isLocked, setIsLocked] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);
    useEffect(() => {
      // Fetch the questions for HTML quiz using axios
      axios.get("/api/reactquestions")
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
      // Submit answers to the backend
      axios
        .post("/api/reactsubmit", userAnswers)
        .then((res) => {
          setScore(res.data.score); // Set score from response
          setFeedback(res.data.results); // Set feedback for each question
        })
        .catch((err) => console.error("Error submitting quiz:", err));
    };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-purple-950 text-white px-4">
      <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-md w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-purple-300">
          Question {current + 1} of {questions.length}
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-center">{questions[current]?.question}</h3>

        <div className="space-y-4">
          {questions[current]?.options.map((opt, i) => {
            let buttonClass = 'w-full font-medium py-3 px-4 rounded-lg shadow-md border transition-all duration-300';

            if (isLocked) {
              if (opt.trim().toLowerCase() === questions[current]?.answer.trim().toLowerCase()) {
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
            {current === questions.length - 1 ? (
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
                <p>Correct Answer: <span className="text-green-700">{item.correct}</span></p>
              )}
              <hr className="my-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Quizereact
