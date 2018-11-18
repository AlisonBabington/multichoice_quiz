import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { reduxForm } from 'redux-form';
import { setCurrentQuestion } from '../actions/questions'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
    }

    handleAnswerSubmit(answer) {
        //set score by answer value here
    }

    setCurrentQuestion() {
        const currentQuestion = this.props.questions.find((question) => question.id === this.props.userPosition)
        this.props.currentQuestion(currentQuestion)
    }

    // setCurrentAnswers() {
    //     const currentAnswers = this.props.currentAnswers.filter((answer) => answer.question.id === this.props.userPosition)
    //     this.props.currentAnswers(currentAnswers)
    // }

    render () {

        return (
            <div>
            <h2>hi!</h2>
            <QuizForm handleSubmit = {this.handleAnswerSubmit} question = {this.currentQuestion} answers = {this.currentAnswers}/>
            </div>
        )
    }

}

const formConfiguration = {
    form: 'Quiz'
}

const mapStateToProps = (state) => {
    return {
        ...state,
        currentQuestion: state.currentQuestion,
        currentAnswers: state.currentAnswers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentQuestion: (question) => dispatch(setCurrentQuestion(question)), 
        // currentAnswers: (answers) => dispatch(setCurrentAnswers(answers))  
    };
};

Quiz = reduxForm(formConfiguration)(Quiz);

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);