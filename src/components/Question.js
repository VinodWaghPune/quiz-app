import React from "react";
import { useState } from "react";

function Question({ _questionId, _questionList, setQuestionList }) {
  const [questionId, setQuestionId] = useState();

  //console.log(props);

  //let temp_questionList = [..._questionList];
  // setQuestionId(_questionId);
  const filterList = _questionList.filter((quetsion) => {
    return quetsion.id === _questionId;
  });
  // console.log("filter list " + filterList[0].question);
  // console.log("Un filter list " + _questionList[0].question);

  const handleChange = (event) => {
    const temp = [..._questionList];
    temp[_questionId - 1].user_answer = event.target.value;
    //setQuestionList(temp);
    console.log(_questionList);
  };
  return (
    <div>
      <h1>Question - {filterList[0].id}</h1>
      <h2>{filterList[0].question}</h2>

      <div
        style={{
          direction: "flex",
          flexDirection: "column",
          color: "blue",
        }}
      >
        <input
          type="radio"
          value={filterList[0].option1}
          name="options"
          onChange={handleChange}
        />
        {filterList[0].option1}
        <input
          type="radio"
          value={filterList[0].option2}
          name="options"
          onChange={handleChange}
        />
        {filterList[0].option2}

        <input
          type="radio"
          value={filterList[0].option3}
          name="options"
          onChange={handleChange}
        />
        {filterList[0].option3}

        <input
          type="radio"
          value={filterList[0].option4}
          name="options"
          onChange={handleChange}
        />
        {filterList[0].option4}
      </div>
    </div>
  );
}

export default Question;
