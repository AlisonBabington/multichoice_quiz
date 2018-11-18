import React from 'react';
import { Form, Field } from 'redux-form'

const UserNameForm = ({handleSubmit}) => {
    
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
export default UserNameForm;