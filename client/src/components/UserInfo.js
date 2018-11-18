import React from 'react';
import { userName } from '../reducers/user';

const UserInfo = ({users}) => {
     
    if (!users) {
        return null;
    }

     return (
         <h4>{users.name}: {users.score}</h4>
     )
}

export default UserInfo;