import React from "react";
import { useContext } from "react";
import QuizContext from "./context/QuizContext";

function QuestionList() {
  const { questionList, handleEditQuestion, handleDeleteQuestion } =
    useContext(QuizContext);

  return (
    <div>
      <div className="flex flex-col">
        <table className="table-auto text-black bottom-3 border border-solid border-gray-200">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Question</th>
              <th>Option1</th>
              <th>Option2</th>
              <th>Option3</th>
              <th>Option4</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody className="text-black">
            {questionList.map((item, key) => (
              <tr className="border border-black">
                <td>
                  <button
                    className="mt-5 btn bg-slate-500 text-white font-bold py-4 px-4 rounded"
                    onClick={() => handleEditQuestion(item)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="mt-5 btn bg-slate-500 text-white font-bold py-4 px-4 rounded"
                    onClick={() => {
                      handleDeleteQuestion(item);
                    }}
                  >
                    Delete
                  </button>
                </td>

                <td>
                  <h1 className="text-xl text-green-500 font-bold">
                    {item.question}
                  </h1>
                </td>
                <td>
                  <h1 className="text-xl text-green-500 font-bold ml-5 mb-10">
                    {item.option1}
                  </h1>
                </td>
                <td>
                  <h1 className="text-xl text-green-500 font-bold ml-5">
                    {item.option2}
                  </h1>
                </td>

                <td>
                  <h1 className="text-xl text-green-500 font-bold ml-5">
                    {item.option3}
                  </h1>
                </td>
                <td>
                  <h1 className="text-xl text-green-500 font-bold ml-5">
                    {item.option4}
                  </h1>
                </td>
                <td>
                  <h1 className="text-xl text-green-500 font-bold ml-5">
                    {item.correct_answer}
                  </h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuestionList;
