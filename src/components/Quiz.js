import React from "react";
import ProgressBar from "./ProgressBar";
import Question from "./Question";
import Thankyou from "./Thankyou";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function Quiz() {
  const { questionId, setQuestionId, questionList, setQuestionList } =
    useContext(QuizContext);

  return (
    <div>
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
          className="btn bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
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
            className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn"
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

export default Quiz;
