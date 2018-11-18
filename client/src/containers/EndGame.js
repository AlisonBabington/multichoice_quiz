import React, { Component } from 'react';
import { connect } from 'react-redux';

class EndGame extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div>
                <En
                <h1>Game over!</h1>
                <h3>Well done {this.props.userName.name}, you scored {this.props.userName.score}!</h3>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userName: state.userName
    }
}


export default connect(mapStateToProps)(EndGame);