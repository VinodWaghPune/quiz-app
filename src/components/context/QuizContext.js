import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  //const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [questionId, setQuestionId] = useState(-1);
  const [questionList, setQuestionList] = useState([]);
  const [questionEdit, setQuestionEdit] = useState({ item: {}, edit: false });
  const [dbupdate, setDbupdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/getquestionlist").then((res) => {
      console.log("get questions" + res.data[0].question);
      setQuestionList(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8000/getquestionlist").then((res) => {
      console.log("get questions" + res.data[0].question);
      setQuestionList(res.data);
    });
    setDbupdate(false);
  }, [dbupdate]);

  //handle the question edit action
  const handleEditQuestion = (item) => {
    setQuestionEdit({ item, edit: true });
  };

  const handleDeleteQuestion = (item) => {
    console.log("delete called");
    if (window.confirm("do you want to delete this record?")) {
      axios.delete(`http://localhost:8000/delete_question?id=${item.id}`);
      setDbupdate(true);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        questionId,
        setQuestionId,
        questionList,
        setQuestionList,
        handleEditQuestion,
        questionEdit,
        setQuestionEdit,
        setDbupdate,
        handleDeleteQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
