import React from 'react';

import QuestionAdd from '../components/QuestionAdd';
import QuestionList from '../components/QuestionList';

function QuestionEntry() {

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
