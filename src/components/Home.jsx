import React from "react";

import { useState, useContext } from "react";

import Modal from "./Modal";
import QuizLogo from "../assets/quiz-logo.png";
import backgroundImg from "../assets/backgroundImg.png";
import Quiz from "./Quiz";

import axios from "axios";

import { QuizContextProvider } from "./context/QuizContext";

function Home() {
    const [showQuiz, setShowQuiz] = useState(false);
    return (
        <div className="App">
            <img src={QuizLogo} className="h-6300px]"></img>
            <p className="text-gray-700 text-xl font-bold text-center mb-2">
                Interactive Quiz
            </p>

            {showQuiz && <Modal showQuiz={showQuiz} />}
            <button
                className="btn bg-green-500  hover:bg-green-700 text-white font-bold py-4 px-4 rounded"
                onClick={() => setShowQuiz(true)}
            >
                Try the demo
            </button>
        </div>
    );
}

export default Home;
