import React, { useState } from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";
import Congrats from "../assets/congrats.gif";
import ShowAnswer from "./ShowAnswer";

function Thankyou() {
  const { questionId, setQuestionId, questionList } = useContext(QuizContext);
  const [showAns, setShowAns] = useState(false);
  let correctAns = 0;
  return (
    <div className="flex flex-col items-center overflowy-auto">
      <h1 className="text-white text-3xl text-bold">Congratulations!</h1>
      <img src={Congrats} alt="congartsMessage"></img>

      {questionList.forEach((item, key) => {
        if (item.user_answer === item.correct_answer) {
          correctAns++;
        }
      })}
      <h2 className="text-white text-3xl text-bold">
        you scored {correctAns}/{questionList.length}
      </h2>
      <div className="flex flex-row justify-end mt-10">
        <button
          className="opacity-20 hover:opacity-30 btn bg-white  text-white font-bold py-2 px-4 rounded"
          onClick={(e) => setQuestionId(-1)}
        >
          Restart
        </button>
        <button
          className="btn bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-20"
          onClick={(e) => {
            if (showAns) {
              setShowAns(false);
            } else {
              setShowAns(true);
            }
          }}
        >
          Show Answers
        </button>
      </div>
      {showAns && <ShowAnswer />}
    </div>
  );
}

export default Thankyou;
