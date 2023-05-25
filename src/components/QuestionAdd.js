import React from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function QuestionAdd() {
  const { questionList, setQuestionList } = useContext(QuizContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = [...questionList];
    let arr = [
      {
        question: e.target.question.value,
        option1: e.target.option1.value,
        option2: e.target.option2.value,
        option3: e.target.option3.value,
        option4: e.target.option4.value,
        correct_answer: e.target.correctAnswer.value,
      },
    ];

    console.log("for submit -" + temp.length);
    temp.push(arr);
    console.log("for questionList -" + questionList[4].question);
    setQuestionList(temp);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex-flex-row mt-5">
            <label>Question</label>
            <input
              type="text"
              name="question"
              placeholder="Enter the question"
              className="ml-10"
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 1</label>
            <input
              type="text"
              name="option1"
              placeholder="Enter Option1"
              className="ml-10"
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 2</label>
            <input
              type="text"
              name="option2"
              placeholder="Enter Option2"
              className="ml-10"
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 3</label>
            <input
              type="text"
              name="option3"
              placeholder="Enter Option3"
              className="ml-10"
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 4</label>
            <input
              type="text"
              name="option4"
              placeholder="Enter Option4"
              className="ml-10 "
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Correct Answer</label>
            <input
              type="text"
              name="correctAnswer"
              placeholder="Enter Correct Answer"
              className="ml-10"
            />
          </div>

          <button
            type="submit"
            className="mt-5 btn bg-slate-500 text-white font-bold py-4 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default QuestionAdd;
