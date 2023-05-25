import React from "react";
import { Transition } from "@headlessui/react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function Question() {
  const { questionId, setQuestionId, questionList, setQuestionList } =
    useContext(QuizContext);

  const handleChange = (value) => {
    const temp = [...questionList];
    temp[questionId].user_answer = value;
    setQuestionList(temp);
  };
  return (
    <Transition
      show={true}
      enter="transition transform duration-500"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition transform duration-500"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="flex flex-col w-[70%]">
        <h1 className="text-white text-xl mb-8">
          Question - {questionList[questionId].id}
        </h1>
        <h2 className="text-white text-xl mb-8">
          {questionList[questionId].question}
        </h2>

        <div className="flex flex-col items-start justify-start ">
          <div className="flex flex-row">
            <input
              type="radio"
              value={questionList[questionId].option1}
              name="options"
              onChange={(e) => handleChange(e.target.value)}
              id={questionList[questionId].option1}
              checked={
                questionList[questionId].option1 ===
                questionList[questionId].user_answer
              }
            />
            <label
              className="text-white text-xl ml-4"
              htmlFor={questionList[questionId].option1}
            >
              {questionList[questionId].option1}
            </label>
          </div>

          <div className="flex flex-row">
            <input
              type="radio"
              value={questionList[questionId].option2}
              name="options"
              onChange={(e) => handleChange(e.target.value)}
              id={questionList[questionId].option2}
              checked={
                questionList[questionId].option2 ===
                questionList[questionId].user_answer
              }
            />

            <label
              className="text-white text-xl ml-4"
              htmlFor={questionList[questionId].option2}
            >
              {questionList[questionId].option2}
            </label>
          </div>

          <div className="flex flex-row">
            <input
              type="radio"
              value={questionList[questionId].option3}
              name="options"
              onChange={(e) => handleChange(e.target.value)}
              id={questionList[questionId].option3}
              checked={
                questionList[questionId].option3 ===
                questionList[questionId].user_answer
              }
            />
            <label
              className="text-white text-xl ml-4"
              htmlFor={questionList[questionId].option3}
            >
              {questionList[questionId].option3}
            </label>
          </div>

          <div className="flex flex-row">
            <input
              type="radio"
              value={questionList[questionId].option4}
              name="options"
              onChange={(e) => handleChange(e.target.value)}
              id={questionList[questionId].option4}
              checked={
                questionList[questionId].option4 ===
                questionList[questionId].user_answer
              }
            />
            <label
              className="text-white text-xl ml-4"
              htmlFor={questionList[questionId].option4}
            >
              {questionList[questionId].option4}
            </label>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Question;
