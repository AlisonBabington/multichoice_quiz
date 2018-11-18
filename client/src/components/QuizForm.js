import React from 'react';


const QuizForm= ({handleSubmit}) => {
    
   return (
   
    <form className='quiz' onSubmit={handleSubmit}>
        
            <label>Question</label>
            <input style={{width: 200}} type="text" name="name" />
            <label>answers</label>
            <input style={{width: 200}} type="text" name="password" ></input>
    

        <button type='submit'>Edit User</button>
      
    </form>

    );
            
};


export default QuizForm;
