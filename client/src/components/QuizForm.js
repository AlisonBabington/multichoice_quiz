import React from "react";
import { Box } from "bloomer/lib/elements/Box";
import { Container } from "bloomer/lib/layout/Container";
import { Field } from "bloomer/lib/elements/Form/Field/Field";
import { Control } from "bloomer/lib/elements/Form/Control";
import { Radio } from "bloomer/lib/elements/Form/Radio";

const QuizForm= ({onClick, question, answers}) => {
    
    if (!question || !answers) {
        return null;
    }

    const answerOptions = answers.map ((answer) => {
        return  <div key = {answer.id} style={{margin: 10}}>
                    <Radio value={answer.score} onClick={onClick}>  {answer.option}</Radio> 
                </div>
                
    })

   return (
        <Box style={{maxWidth: 500, marginLeft: 450, marginTop: 40}}>
            <Container isFluid >
                <form className='quiz' >
                    <label><strong>Question {question.id}: {question.question}</strong></label>
                        <Field>
                            <Control>
                                {answerOptions}
                            </Control>
                        </Field>
                </form>
            </Container>
        </Box>

    );
            
};

export default QuizForm;
