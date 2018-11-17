import React, { Component } from 'react';
import { connect } from 'react-redux';
import { questionsFetchData } from '../actions/questions';


class Main extends Component {

    componentDidMount () {
        this.props.fetchData('http://localhost:8080/api/questions')
    }
    
    render (){

        return (
            <div>
                <ul>
                <h1>hi</h1>
                    {/* {this.props.questions.map((question) => <li key = {question.id}>{question.question} </li>)} */}
                </ul>
            </div>
        )
    } 
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        state,
        questions: state.questions
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(questionsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);