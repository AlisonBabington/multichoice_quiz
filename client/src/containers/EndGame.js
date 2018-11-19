import React, { Component } from 'react';
import { connect } from 'react-redux';
import EndGameBox from '../components/EndGameBox';
import UserInfo from '../components/UserInfo';

class EndGame extends Component {
   
    render () {
      
        if (!this.props.user.name) {
           window.location.href = "/"
        }

        return (
            <div>
                <UserInfo users = {this.props.user}/>
                <EndGameBox user={this.props.user}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
       
        user: state.user
    }
}


export default connect(mapStateToProps)(EndGame);