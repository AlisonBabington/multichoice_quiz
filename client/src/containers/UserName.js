import React, { Component} from 'react';
import { connect } from 'react-redux';
import { renderToJson } from 'enzyme-to-json';
import UserNameForm from '../components/UserNameForm';

//container component
class UserName extends Component {
    constructor(props) {
        super(props);
        this.handleNameFormSubmit = this.handleNameFormSubmit.bind(this)
    }

    handleNameFormSubmit (name) {
        
    }



    render() {
        return (
            <UserNameForm/>
        )
    }

//onclick method to pass down to usernameform which is a presentational component


}



const mapStateToProps = (state) => {
    return {
        ...state,
        userName: state.userName
    }
}

//must connect to get state
export default connect(mapStateToProps)(UserName);