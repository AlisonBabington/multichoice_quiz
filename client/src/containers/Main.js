import React, { Component, Fragment } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { questionsFetchData } from '../actions/questions';
import { answersFetchData } from '../actions/answers';
import UserName from './UserName';
import Quiz from './Quiz';


class Main extends Component {

    componentDidMount () {
        this.props.fetchQuestionData()
        this.props.fetchAnswerData()
    }
    
    render (){


        return (
            <Router>
                <Fragment>
                    <Route exact path='/' component={UserName}/>
                    <Route exact path='/questions' component={Quiz}/>
                </Fragment>
            </Router>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        ...state,
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