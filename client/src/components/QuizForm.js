import React, { Fragment } from "react";



const QuizForm= ({onClick, question, answers}) => {
    
    if (!question || !answers) {
        return null;
    }

    const answerOptions = answers.map ((answer) => {
        return  <Fragment key={answer.id}>
                    <label>
                        <input type="radio" value={answer.score} onClick={onClick}/>
                        {answer.option}
                    </label>
                <br></br>
                </Fragment>
        
    })

   return (
       
    <form className='quiz' >
            <label>{question.question}</label>
            <ul>
                {answerOptions}
            </ul>
    </form>

    );
            
};


export default QuizForm;
