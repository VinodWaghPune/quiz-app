import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  //const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questionId, setQuestionId] = useState(-1);
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/getquestionlist").then((res) => {
      console.log("get questions" + res.data[0].question);
      setQuestionList(res.data);
    });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questionId,
        setQuestionId,
        questionList,
        setQuestionList,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
