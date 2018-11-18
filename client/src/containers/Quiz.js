import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { currentQuestionChosen } from '../actions/questions';
import { currentAnswersChosen} from '../actions/answers';
import { updateScore } from '../actions/quizzes'

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
       event.preventDefault();
       const answerScore = parseInt(event.target.value)
       this.props.markAnswer(answerScore)
    }

    render () {

        return (
            <div>
            <h2>hi!</h2>
            <QuizForm onClick = {this.handleAnswerSubmit} question = {this.props.questions.currentQuestion} answers = {this.props.answers.currentAnswers}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        ...state,
        currentQuestion: state.currentQuestion,
        currentAnswers: state.currentAnswers,
        currentPosition: state.userName.userPosition,
        score: state.userName.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentQuestion: (question) => dispatch(currentQuestionChosen(question)), 
        setCurrentAnswers: (answers) => dispatch(currentAnswersChosen(answers)), 
        markAnswer: (answerScore) => dispatch(updateScore(answerScore))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);