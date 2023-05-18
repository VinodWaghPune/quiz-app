import React from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";
import Congrats from "../assets/congrats.gif";

function Thankyou() {
  const { questionId, setQuestionId, questionList } = useContext(QuizContext);
  let correctAns = 0;
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-white text-3xl text-bold">Congratulations!</h1>
      <img src={Congrats} alt="congartsMessage"></img>
      {console.log(questionList)}
      {questionList.forEach((item, key) => {
        if (item.user_answer === item.correct_answer) {
          correctAns++;
          console.log(correctAns);
        }
      })}
      <h2 className="text-white text-3xl text-bold">
        you scored {correctAns}/{questionList.length}
      </h2>
      <div className="flex flex-row justify-end mt-10">
        <button
          className="btn bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => setQuestionId(-1)}
        >
          Restart
        </button>
        <button className="btn bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-20">
          Show Answers
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
