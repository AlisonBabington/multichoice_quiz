import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuizForm from '../components/QuizForm';
import { updateScore } from '../actions/quizzes';
import UserInfo from '../components/UserInfo';
import shuffle from 'shuffle-array';

class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 1,
            currentQuestion: null,
            currentAnswers: null
        }
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
    }

    setCurrentQuestion() {
        const currentQuestion = this.props.questions.questions.find((question) => question.id === this.state.currentIndex)
        this.setState({ currentQuestion: currentQuestion })
    }

    setCurrentAnswers() {
        const currentAnswers = this.props.answers.answers.filter((answer) => answer.question_id === this.state.currentIndex)
        shuffle(currentAnswers);
        this.setState({ currentAnswers: currentAnswers })
    }

    sortOptions() {
        this.endGame();
        this.setCurrentQuestion();
        this.setCurrentAnswers();
    }

    componentDidMount() {
        console.log('mount', this.props)
        this.sortOptions()
    }

    handleAnswerSubmit(event) {
        event.preventDefault();
        const answerScore = parseInt(event.target.value)
        this.props.markAnswer(answerScore);
        this.setState({ currentIndex: this.state.currentIndex + 1 }, () => this.sortOptions())

    }

    endGame() {
        if (this.state.currentIndex > 10) {
            this.props.history.push('/endGame')
        }
    }

    render() {

        if (!this.props.name) {
            window.location.href = '/'
        }

        return (
            <div>
                <UserInfo users={this.props.user} />
                <QuizForm onClick={this.handleAnswerSubmit} question={this.state.currentQuestion} answers={this.state.currentAnswers} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ...state,
        name: state.user.name,
        score: state.user.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        markAnswer: (answerScore) => dispatch(updateScore(answerScore))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);