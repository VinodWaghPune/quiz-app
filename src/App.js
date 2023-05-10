import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Thankyou from "./components/Thankyou";
import Question from "./components/Question";
import ProgressBar from "./components/ProgressBar";
import Modal from "./components/Modal";
import QuizLogo from "./assets/quiz-logo.png";
import Quiz from "./components/Quiz";

function App() {
  const [questionId, setQuestionId] = useState(0);
  const [questionList, setQuestionList] = useState([
    {
      question: "What is the popular morning beverage?",
      id: 1,
      option1: "coffee",
      option2: "tea",
      option3: "water",
      option4: "beer",
      correct_answer: "tea",
      user_answer: "",
    },
    {
      question: "What is the popular breakast?",
      id: 2,
      option1: "bread-omlete",
      option2: "poha",
      option3: "smoothie",
      option4: "oats",
      correct_answer: "poha",
      user_answer: "",
    },
    {
      question: "What is the popular lunch?",
      id: 3,
      option1: "roti-curry",
      option2: "chicken",
      option3: "noodles",
      option4: "salad",
      correct_answer: "chicken",
      user_answer: "",
    },
    {
      question: "What is the popular dinner?",
      id: 4,
      option1: "dal-rice",
      option2: "soup",
      option3: "currry-rice",
      option4: "salad",
      correct_answer: "dal-rice",
      user_answer: "",
    },
  ]);

  return (
    <div className="App">
      <img src={QuizLogo}></img>
      <Modal>
        {/* <Quiz
          questionId={questionId}
          setQuestionId={setQuestionId}
          questionList={questionList}
          setQuestionList={setQuestionList}
        /> */}
      </Modal>
    </div>
  );
}

export default App;
