import React from 'react';
import { Hero } from 'bloomer/lib/layout/Hero/Hero';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { HeroFooter } from 'bloomer/lib/layout/Hero/HeroFooter';
import { Level } from 'bloomer/lib/components/Level/Level';
import { LevelRight } from 'bloomer/lib/components/Level/LevelRight';
import { LevelItem } from 'bloomer/lib/components/Level/LevelItem';


const UserInfo = ({users}) => {
     
    if (!users) {
        return null;
    }

     return (
        <Hero isColor="info" isSize="small">
            <HeroBody>
                <Container >
                    <Title> Float Cash Flow Quiz</Title>
                </Container>
            </HeroBody>
            <HeroFooter>
                <Level>
                    <LevelRight>
                        <LevelItem><strong>{users.name}: {users.score}</strong></LevelItem>
                    </LevelRight>
                </Level> 
            </HeroFooter>
        </Hero>
            
         
     )
}

export default UserInfo;