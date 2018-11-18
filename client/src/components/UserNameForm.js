import React from 'react';
import { Form, Field } from 'redux-form'

const UserNameForm = ({handleSubmit}) => {
    
   return (
        <div>
            <form name="user" onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="name" component="input" type="text"/>
                <button type="submit">Start the quiz!</button>
            </form>
        </div>
    );
            
};
export default UserNameForm;