import React from 'react';


const QuizForm= ({handleSubmit, question}) => {
    
    if (!question) {
        return null;
    }

   return (
       
    <form className='quiz' onSubmit={handleSubmit}>
        
            <label>{question.question}</label>
            <label>answers</label>
            <input style={{width: 200}} type="text" name="password" ></input>
    

        <button type='submit'>Edit User</button>
      
    </form>

    );
            
};


export default QuizForm;
