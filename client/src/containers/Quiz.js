import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { currentQuestionChosen } from '../actions/questions'
import { currentAnswersChosen} from '../actions/answers'

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
    }

    setCurrentQuestion() {
            const currentQuestion = this.props.questions.questions.find((question) => question.id === this.props.userName.userPosition)
            this.props.setCurrentQuestion(currentQuestion)
        }

    setCurrentAnswers() {
         const currentAnswers = this.props.answers.answers.filter((answer) => answer.question_id === this.props.userName.userPosition)
         this.props.setCurrentAnswers(currentAnswers)
    }
        
    componentDidMount () {
        this.setCurrentQuestion();
        this.setCurrentAnswers();
    }

    handleAnswerSubmit(event) {
       console.log(event)
    }

    render () {

        return (
            <div>
            <h2>hi!</h2>
            <QuizForm handleSubmit = {this.handleAnswerSubmit} question = {this.props.questions.currentQuestion} answers = {this.props.answers.currentAnswers}/>
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
        setCurrentQuestion: (question) => dispatch(currentQuestionChosen(question)), 
        setCurrentAnswers: (answers) => dispatch(currentAnswersChosen(answers)), 
        // markAnswer: (answerScore) => dispatch(markAnswer(answerScore))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);