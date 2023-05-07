import React from "react";

function Thankyou({ questionList }) {
  return (
    <div>
      <h1>Thank you</h1>
      {questionList.map((item, key) => {
        return (
          <div>
            <h2>Question {item.question}</h2>
            <h3>Option1{item.option1}</h3>
            <h3>Option2{item.option2}</h3>
            <h3>Option3{item.option3}</h3>
            <h3>Option4{item.option4}</h3>
            <h3>user selected{item.user_answer}</h3>
            <h3>Correct {item.correct_answer}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Thankyou;
