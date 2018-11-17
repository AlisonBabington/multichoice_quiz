import React from 'react';
import { reduxForm, Form} from 'redux-form'

const UserNameForm = props => {
    const handleSubmit = props
   return (
       <div>
            <Form onSubmit={(user) => handleSubmit(user)}>
                <label htmlFor="user.name">name:</label>
                <input model="user.name" id="user.name" />
                <button type="submit">
                    Start the quiz!
                </button>
            </Form>
        </div>
    );
            
};
export default (reduxForm({ form: 'userName'})(UserNameForm));