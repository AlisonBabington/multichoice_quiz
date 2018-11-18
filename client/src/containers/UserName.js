import React, { Component} from 'react';
import { connect } from 'react-redux';
import UserNameForm from '../components/UserNameForm';
import { userNameInput } from '../actions/user';
import { Hero } from 'bloomer';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';

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
        this.props.history.push('/questions')
    }

    render() {
 
        return (
            <div>
            <Hero isColor="info" isSize="medium">
                <HeroBody>
                    <Container hasTextAlign='centered'>
                        <Title>Welcome to the Float Cash Flow Quiz!</Title>
                    </Container>
                </HeroBody>
            </Hero>
                <UserNameForm handleSubmit={this.handleNameFormSubmit}/>
            </div>
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