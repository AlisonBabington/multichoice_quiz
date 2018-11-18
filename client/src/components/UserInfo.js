import React from 'react';
import { Level } from 'bloomer';
import { LevelRight } from 'bloomer/lib/components/Level/LevelRight';
import { LevelItem } from 'bloomer/lib/components/Level/LevelItem';

const UserInfo = ({users}) => {
     
    if (!users) {
        return null;
    }

     return (
         <Level>
             <LevelRight>
                 <LevelItem>{users.name}: {users.score}</LevelItem>
             </LevelRight>
         </Level>
         
     )
}

export default UserInfo;