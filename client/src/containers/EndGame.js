import React, { Component } from 'react';
import { connect } from 'react-redux';
import EndGameBox from '../components/EndGameBox';
import UserInfo from '../components/UserInfo';

class EndGame extends Component {
   
    render () {
      
        if (!this.props.userName.name) {
           window.location.href = "/"
        }

        return (
            <div>
                <UserInfo users = {this.props.userName}/>
                <EndGameBox user={this.props.userName}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
       
        userName: state.userName
    }
}


export default connect(mapStateToProps)(EndGame);