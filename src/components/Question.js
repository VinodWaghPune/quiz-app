import React from "react";

import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function Question() {
  const { questionId, setQuestionId, questionList, setQuestionList } =
    useContext(QuizContext);

  //console.log(props);

  //let temp_questionList = [..._questionList];
  // setQuestionId(_questionId);
  // const filterList = _questionList.filter((quetsion) => {
  //   return quetsion.id === _questionId;
  // });
  // console.log("filter list " + filterList[0].question);
  // console.log("Un filter list " + _questionList[0].question);

  const handleChange = (value) => {
    const temp = [...questionList];
    temp[questionId].user_answer = value;
    //setQuestionList(temp);
    console.log("value is " + value);
  };
  return (
    <div className="flex flex-col items-start justify-center ">
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
          />
          <label className="text-white text-xl ml-4">
            {questionList[questionId].option1}
          </label>
        </div>

        <div className="flex flex-row">
          <input
            type="radio"
            value={questionList[questionId].option2}
            name="options"
            onChange={(e) => handleChange(e.target.value)}
          />

          <label className="text-white text-xl ml-4">
            {questionList[questionId].option2}
          </label>
        </div>

        <div className="flex flex-row">
          <input
            type="radio"
            value={questionList[questionId].option3}
            name="options"
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className="text-white text-xl ml-4">
            {questionList[questionId].option3}
          </label>
        </div>

        <div className="flex flex-row">
          <input
            type="radio"
            value={questionList[questionId].option4}
            name="options"
            onChange={(e) => handleChange(e.target.value)}
          />
          <label className="text-white text-xl ml-4">
            {questionList[questionId].option4}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Question;
