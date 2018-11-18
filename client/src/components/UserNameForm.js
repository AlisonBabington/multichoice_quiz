import React from 'react';
import { Button } from 'bloomer';
import { Section } from 'bloomer/lib/layout/Section';
import { Container } from 'bloomer/lib/layout/Container';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { FieldLabel } from 'bloomer/lib/elements/Form/Field/FieldLabel';
import { Control } from 'bloomer/lib/elements/Form/Control';

const UserNameForm = ({handleSubmit}) => {
    
   return (
        <div>
            <Section>
                <Container isFluid style={{alignItems: 'center'}}>
                    <form name="user" onSubmit={handleSubmit}>
                    <Field>
                        <FieldLabel >Please enter your name:</FieldLabel>
                        <Control>
                            <Input name="name" component="input" type="text"/>
                        </Control>
                    </Field>
                    <Button type="submit" isColor='info'>Start the quiz!</Button> 
                    </form>
                </Container>
            </Section>
        </div>
    );
            
};
export default UserNameForm;