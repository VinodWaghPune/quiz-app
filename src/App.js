import logo from "./logo.svg";
import "./App.css";
import { useState, useContext } from "react";
import Thankyou from "./components/Thankyou";
import Question from "./components/Question";
import ProgressBar from "./components/ProgressBar";
import Modal from "./components/Modal";
import QuizLogo from "./assets/quiz-logo.png";
import backgroundImg from "./assets/backgroundImg.png";
import Quiz from "./components/Quiz";
import QuizContext from "./components/context/QuizContext";

import { QuizContextProvider } from "./components/context/QuizContext";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <QuizContextProvider>
      <div className="App">
        <img src={QuizLogo} className="h-6300px]"></img>
        <p className="text-gray-700 text-xl font-bold text-center mb-2">
          Interactive Quiz
        </p>
        {showQuiz && <Modal showQuiz={showQuiz} />}
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-[85px] rounded-full text-xl"
          onClick={() => setShowQuiz(true)}
        >
          Try the demo
        </button>
      </div>
    </QuizContextProvider>
  );
}

export default App;
