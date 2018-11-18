import React from 'react';
import { Level } from 'bulma';

const UserInfo = ({users}) => {
     
    if (!users) {
        return null;
    }

     return (
         <Level>
             <level-right>
                 <level-item>{users.name}: {users.score}</level-item>
             </level-right>
         </Level>
         
     )
}

export default UserInfo;