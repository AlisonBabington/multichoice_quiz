import React from 'react';
import { Box } from 'bloomer/lib/elements/Box';
import { Button } from 'bloomer/lib/elements/Button';

const EndGameBox = ({user}) => {

    return (
        <div>
            <Box style={{margin: 250}}>
                <h1>Game over!</h1>
                <h3>Well done {user.name}, you scored {user.score} points!</h3>
                <Button type="submit" isColor='info' href="/">Return to Home</Button> 
            </Box>
        </div>
    )
   
}

export default EndGameBox;