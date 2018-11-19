import React from 'react';
import { Box } from 'bloomer/lib/elements/Box';

const EndGameBox = ({user}) => {

    return (
        <div>
            <Box style={{margin: 250}}>
                <h1>Game over!</h1>
                <h3>Well done {user.name}, you scored {user.score} points!</h3>
            </Box>
        </div>
    )
   
}

export default EndGameBox;