import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionsFetchData } from '../actions/questions';
import { answersFetchData } from '../actions/answers';


class Main extends Component {

    componentDidMount () {
        this.props.fetchQuestionData()
        this.props.fetchAnswerData()
    }
    
    render (){
        return (
            <div>
                <ul>
                <h1>hi</h1>
                  <h2></h2>
                </ul>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        state,
        questions: state.questions,
        answers: state.answers   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestionData: () => dispatch(questionsFetchData()),
        fetchAnswerData: () => dispatch(answersFetchData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);