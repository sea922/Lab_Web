import React from 'react';

import {
    Container,
    Header,
    HeaderWrapper,
    HeaderTitle,
    Link,
    Content,
    Title,
    Info,
    SocialContainer
} from './styles';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
    return (
        <Container>
            <Header>
                <HeaderWrapper>
                    <WhatsappIcon />
                    <HeaderTitle>WhatsApp</HeaderTitle>
                </HeaderWrapper>

                <HeaderWrapper>
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/signup'>Sign up</Link>
                </HeaderWrapper>
            </Header>

            <Content>
                <Title>Whatsapp - Poman </Title>
                <Info>LAB 6 - React</Info>
            </Content>
        </Container>
    );
};

export default Home;
