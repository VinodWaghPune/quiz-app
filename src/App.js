import logo from "./logo.svg";
import "./App.css";
import { useState, useContext } from "react";
import Thankyou from "./components/Thankyou";
import Question from "./components/Question";

import Modal from "./components/Modal";
import QuizLogo from "./assets/quiz-logo.png";
import backgroundImg from "./assets/backgroundImg.png";
import Quiz from "./components/Quiz";
import QuizContext from "./components/context/QuizContext";
import axios from "axios";

import { QuizContextProvider } from "./components/context/QuizContext";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionEntry from "./pages/QuestionEntry";

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [counter, setCounter] = useState(0);

  // const getUser = () => {
  //   axios.get("http://localhost:8000/getquestionlist").then((res) => {
  //     console.log("get questions" + res);
  //   });
  // };

  // const createUser = () => {
  //   setCounter(counter + 1);
  //   console.log("click creater user " + counter);

  //   axios
  //     .post(`http://localhost:8000/create_user`, {
  //       name: "name" + counter,
  //       email: "email" + counter,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // };

  return (
    <QuizContextProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/QuestionEntry" element={<QuestionEntry />} />
          </Routes>
        </div>
      </Router>
    </QuizContextProvider>
  );
}

export default App;
