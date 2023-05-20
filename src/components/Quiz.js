import React from "react";

import Question from "./Question";
import Thankyou from "./Thankyou";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";
import quizImg from "../assets/quizimg.png";
import Progressbar from "./Progressbar";
import MultiStepProgressBar from "./MultiStepProgressBar/MultiStepProgressBar";

function Quiz() {
  const { questionId, setQuestionId, questionList, setQuestionList } =
    useContext(QuizContext);
  //console.log(" questionId is " + questionId);

  return (
    <div className="`mt-3 h-[600px] w-full  rounded-t-lg flex flex-col items-start justify-center px-5 bg-[url('https://cdn-apps.drimify.com/upload/media/1/4/0001/01/background-57ce7f232d927_1653923457.png')] bg-cover bg-center`">
      {questionId >= 0 && questionId < questionList.length && (
        <MultiStepProgressBar
          page={questionId + 1}
          onPageNumberClick="pagetwo"
          className="mb-8"
        />
      )}
      {questionId >= 0 && questionId < questionList.length && (
        <Question className="mt-8" />
      )}

      {questionId === -1 && (
        <button
          className="btn bg-yellow-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded"
          onClick={(e) => {
            setQuestionId(questionId + 1);

            //make btn name as - Next
          }}
        >
          Begin
        </button>
      )}

      {questionId >= 0 && questionId < questionList.length && (
        <div>
          <button
            className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn mt-8"
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
            className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn ml-5"
            id="next"
            style={{ color: "red" }}
            onClick={(e) => {
              setQuestionId(questionId + 1);

              //make btn name as - Next
            }}
          >
            {questionId === 3 ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {questionId === questionList.length && <Thankyou />}
    </div>
  );
}

export default Quiz;
