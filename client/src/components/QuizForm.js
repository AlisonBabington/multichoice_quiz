import React from 'react';


const QuizForm= ({handleSubmit, question, answers}) => {
    
    if (!question || !answers) {
        return null;
    }

    const answerOptions = answers.map ((answer) => {
        return <li key={answer.id} value={answer.score}>{answer.option}</li>
    })

   return (
       
    <form className='quiz' onSubmit={handleSubmit}>
        
            <label>{question.question}</label>
            <ul>
                {answerOptions}
            </ul>

        <button type='submit'>Edit User</button>
      
    </form>

    );
            
};


export default QuizForm;
