import React, { Fragment } from "react";



const QuizForm= ({handleSubmit, question, answers}) => {
    
    if (!question || !answers) {
        return null;
    }

    const answerOptions = answers.map ((answer) => {
        return  <Fragment key={answer.id}>
                    <label>
                        <input type="radio" value={answer.score} />
                        {answer.option}
                    </label>
                <br></br>
                </Fragment>
        
    })

   return (
       
    <form className='quiz' onSubmit={handleSubmit}>
            <label>{question.question}</label>
            <ul>
                {answerOptions}
            </ul>
        <button type='submit'>Submit Answer</button>
    </form>

    );
            
};


export default QuizForm;
