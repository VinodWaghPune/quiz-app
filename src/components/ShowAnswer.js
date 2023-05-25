import React from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";
import axios from "axios";

function ShowAnswer() {
  const { questionList } = useContext(QuizContext);
  //console.log(questionList);

  return (
    <div>
      <table className="table-auto text-white bottom-3 border border-solid border-gray-200">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr>
            <td className="text-white">1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>

          {questionList.map((element) => (
            <tr>
              <td className="text-white">{element.question}</td>
              <td>{element.user_answer}</td>
              <td>{element.correct_answer}</td>
              <td>
                {element.user_answer === element.correct_answer
                  ? "correct"
                  : "incorrect"}
              </td>
            </tr>
          ))}
            </tr>
          ))}
        </tbody>
      </table>
      {questionList.forEach((element) => {
        // console.log(element);
        <h1>element.question</h1>;
      })}
    </div>
  );
}

export default ShowAnswer;
