import React, { Component} from 'react';
import { renderToJson } from 'enzyme-to-json';
import UserNameForm from '../components/UserNameForm';

//container component
class UserName extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <UserNameForm/>
        )
    }

//must have mapStateToProps

//onclick method to pass down to usernameform which is a presentational component


}
//must connect to get state
export default UserName;