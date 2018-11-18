import React from 'react';
import { Form, Field } from 'redux-form'

const QuizForm= ({handleSubmit, onSubmit}) => {
    
   return (
        <div>
            <Form model="user" onSubmit={handleSubmit}>
            <label>Name</label>
            <Field name="name" component="input" type="text" value="name"/>
                <button type="submit">Start the quiz!</button>
            </Form>
        </div>
    );
            
};
export default QuizForm;