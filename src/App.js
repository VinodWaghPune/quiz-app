import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Thankyou from "./components/Thankyou";
import Question from "./components/Question";
import ProgressBar from "./components/ProgressBar";

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
      {questionId > 0 && <ProgressBar questionId={questionId} />}
      {questionId > 0 && questionId <= questionList.length && (
        <Question
          _questionId={questionId}
          _questionList={questionList}
          setQuetsionList={setQuestionList}
        />
      )}

      {questionId == 0 && (
        <button
          className="btn"
          onClick={(e) => {
            setQuestionId(questionId + 1);

            //make btn name as - Next
          }}
        >
          Begin
        </button>
      )}

      {questionId > 0 && questionId <= questionList.length && (
        <div>
          <button
            className="btn"
            id="prev"
            style={{ color: "red" }}
            onClick={(e) => {
              setQuestionId(questionId - 1);

              //make btn name as - Next
            }}
          >
            Previous
          </button>
          <button
            className="btn"
            id="next"
            style={{ color: "red" }}
            onClick={(e) => {
              setQuestionId(questionId + 1);

              //make btn name as - Next
            }}
          >
            Next
          </button>
        </div>
      )}
      {questionId === questionList.length + 1 && (
        <Thankyou questionList={questionList} />
      )}
    </div>
  );
}

export default App;
