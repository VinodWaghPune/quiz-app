import React from 'react'


import { useState, useContext } from "react";


import Modal from "../components/Modal";
import QuizLogo from "../assets/quiz-logo.png";
import backgroundImg from "../assets/backgroundImg.png";
import Quiz from "../components/Quiz";

import axios from "axios";

import { QuizContextProvider } from '../components/context/QuizContext';

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
                className="bg-blue-500 hover:bg-blue-700 text-red font-bold py-8 px-[85px] rounded-full text-xl"
                onClick={() => setShowQuiz(true)}
            >
                Try the demo
            </button>
        </div>

    )
}

export default Home
