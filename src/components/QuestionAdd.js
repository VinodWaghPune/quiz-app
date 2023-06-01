import React from "react";
import { useContext, useState, useEffect } from "react";
import QuizContext from "./context/QuizContext";
import axios from "axios";

function QuestionAdd() {
  const {
    questionList,
    setQuestionList,
    questionEdit,
    setQuestionEdit,
    setDbupdate,
  } = useContext(QuizContext);

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correct_answer, setCorrect_answer] = useState("");

  useEffect(() => {
    if (questionEdit.edit === true) {
      setQuestion(questionEdit.item.question);
      setOption1(questionEdit.item.option1);
      setOption2(questionEdit.item.option2);
      setOption3(questionEdit.item.option3);
      setOption4(questionEdit.item.option4);
      setCorrect_answer(questionEdit.item.correct_answer);
    }
  }, [questionEdit]);

  const handleClear = () => {
    setQuestionEdit({ item: {}, edit: false });
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrect_answer("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.question.value.trim() === "") {
      return;
    }

    const temp = [...questionList];

    if (questionEdit.edit === true) {
      axios
        .put(`http://localhost:8000/update_question`, {
          question: e.target.question.value,
          option1: e.target.option1.value,
          option2: e.target.option2.value,
          option3: e.target.option3.value,
          option4: e.target.option4.value,
          correct_answer: e.target.correctAnswer.value,
          id: questionEdit.item.id,
        })
        .then((res) => {
          console.log(res);
          setDbupdate(true);
        });
    } else {
      //console.log("for submit -" + temp.length);

      axios
        .post(`http://localhost:8000/create_question`, {
          question: e.target.question.value,
          option1: e.target.option1.value,
          option2: e.target.option2.value,
          option3: e.target.option3.value,
          option4: e.target.option4.value,
          correct_answer: e.target.correctAnswer.value,
        })
        .then((res) => {
          console.log(res);
          setDbupdate(true);
        });

      //console.log("for questionList -" + questionList[4].question);
      //setQuestionList(temp);
      handleClear();
    }
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
              // value={
              //   questionEdit.edit === false ? "" : questionEdit.item.question
              // }
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 1</label>
            <input
              type="text"
              name="option1"
              placeholder="Enter Option1"
              className="ml-10"
              value={option1}
              onChange={(e) => {
                setOption1(e.target.value);
              }}
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 2</label>
            <input
              type="text"
              name="option2"
              placeholder="Enter Option2"
              className="ml-10"
              value={option2}
              onChange={(e) => {
                setOption2(e.target.value);
              }}
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 3</label>
            <input
              type="text"
              name="option3"
              placeholder="Enter Option3"
              className="ml-10"
              value={option3}
              onChange={(e) => {
                setOption3(e.target.value);
              }}
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Option 4</label>
            <input
              type="text"
              name="option4"
              placeholder="Enter Option4"
              className="ml-10 "
              value={option4}
              onChange={(e) => {
                setOption4(e.target.value);
              }}
            />
          </div>
          <div className="flex-flex-row mt-5">
            <label>Correct Answer</label>
            <input
              type="text"
              name="correctAnswer"
              placeholder="Enter Correct Answer"
              className="ml-10"
              value={correct_answer}
              onChange={(e) => {
                setCorrect_answer(e.target.value);
              }}
            />
          </div>

          <div className="div flex flex-row">
            <button
              type="submit"
              className="mt-5 btn bg-slate-500 text-white font-bold py-4 px-4 rounded mr-5"
            >
              Save
            </button>

            <button
              type="reset"
              className="mt-5 btn bg-slate-500 text-white font-bold py-4 px-4 rounded"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QuestionAdd;
