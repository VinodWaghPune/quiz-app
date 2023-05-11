import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Thankyou from "./components/Thankyou";
import Question from "./components/Question";
import ProgressBar from "./components/ProgressBar";
import Modal from "./components/Modal";
import QuizLogo from "./assets/quiz-logo.png";
import Quiz from "./components/Quiz";
import { QuizContextProvider } from "./components/context/QuizContext";

function App() {
  return (
    <QuizContextProvider>
      <div className="App">
        <img src={QuizLogo}></img>
        <Modal>
          <Quiz />
        </Modal>
      </div>
    </QuizContextProvider>
  );
}

export default App;
