import React, { Component} from 'react';
import { connect } from 'react-redux';
import UserNameForm from '../components/UserNameForm';
import { userNameInput } from '../actions/userName';
import { Redirect } from 'react-router-dom';

//container component
class UserName extends Component {
    constructor(props) {
        super(props);
        this.handleNameFormSubmit = this.handleNameFormSubmit.bind(this)
    }

    handleNameFormSubmit (event) {
        event.preventDefault()
        const userName = event.target.name.value
        this.props.userNameExists(userName)
    }

    render() {
         
        return (
            <UserNameForm handleSubmit={this.handleNameFormSubmit}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        ...state,
        userName: state.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userNameExists: (userName) => dispatch(userNameInput(userName)),   
    };
};



//must connect to get state
export default connect(mapStateToProps, mapDispatchToProps)(UserName);