import React from 'react';
import { useContext } from 'react';
import QuizContext from '../components/context/QuizContext';
import QuestionAdd from '../components/QuestionAdd';
import QuestionList from '../components/QuestionList';

function QuestionEntry() {
    const { questionList } = useContext(QuizContext);
    return (
        <div>
            Question List
            <div className='flex flex-col'>
                <QuestionAdd />
                <QuestionList />



            </div>



        </div>
    )
}

export default QuestionEntry
