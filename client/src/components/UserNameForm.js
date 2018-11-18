import React, { Fragment } from 'react';
import { Button } from 'bloomer';
import { Container } from 'bloomer/lib/layout/Container';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { FieldLabel } from 'bloomer/lib/elements/Form/Field/FieldLabel';
import { Control } from 'bloomer/lib/elements/Form/Control';

const UserNameForm = ({handleSubmit}) => {
    
   return (
        <Fragment>
            
                <Container isFluid style={{alignItems: 'center'}}>
                    <form name="user" onSubmit={handleSubmit}>
                    <Field>
                        <FieldLabel style={{float: 'left', marginTop: 25, marginBottom: 10}}>Please enter your name:</FieldLabel>
                        <Control>
                            <Input style={{maxWidth: 250}} name="name" component="input" type="text"/>
                        </Control>
                    </Field>
                    <Button type="submit" isColor='info'>Start the quiz!</Button> 
                    </form>
                </Container>
           
        </Fragment>
    );
            
};
export default UserNameForm;