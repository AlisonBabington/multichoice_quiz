import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { currentQuestionChosen } from '../actions/questions'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
    }

    setCurrentQuestion() {
        console.log(this.props.questions)
        // const currentQuestion = this.props.questions.find((question) => question.id === this.props.userPosition)
        // console.log(currentQuestion)
        // this.props.currentQuestion(currentQuestion)
    }

    componentDidMount () {
        this.setCurrentQuestion();
    }

    handleAnswerSubmit(answer) {
        //set score by answer value here
    }

   

    // setCurrentAnswers() {
    //     const currentAnswers = this.props.currentAnswers.filter((answer) => answer.question.id === this.props.userPosition)
    //     this.props.currentAnswers(currentAnswers)
    // }

    render () {

        return (
            <div>
            <h2>hi!</h2>
            <QuizForm handleSubmit = {this.handleAnswerSubmit} />
            </div>
        )
    }

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
        currentQuestion: (question) => dispatch(currentQuestionChosen(question)), 
        // currentAnswers: (answers) => dispatch(setCurrentAnswers(answers))  
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);