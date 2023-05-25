import React from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function QuestionList() {
  const { questionList } = useContext(QuizContext);

  return (
    <div>
      <div className="flex flex-col">
        {questionList.map((item, key) => (
          <div className="flex flex-row">
            <h1 className="text-xl text-green-500 font-bold">
              {item.question}
            </h1>
            <h1 className="text-xl text-green-500 font-bold ml-5 mb-10">
              {item.option1}
            </h1>
            <h1 className="text-xl text-green-500 font-bold ml-5">
              {item.option2}
            </h1>
            <h1 className="text-xl text-green-500 font-bold ml-5">
              {item.option3}
            </h1>
            <h1 className="text-xl text-green-500 font-bold ml-5">
              {item.option4}
            </h1>
            <h1 className="text-xl text-green-500 font-bold ml-5">
              {item.correct_answer}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
