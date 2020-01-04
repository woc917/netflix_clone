import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Header = styled.header`

`;


const List = styled.ul`
    display: flex;
`;

const Li = styled.li`

`;

const SLink = styled(Link)`

`;



export default () => (
        
            <Header>
                <List>

                    <Li>
                        <SLink to="/">Movies</SLink>
                    </Li>

                    <Li>
                        <SLink to="/tv">TV</SLink>
                    </Li>

                    <Li>
                        <SLink to="/search">Search</SLink>
                    </Li>

                </List>
            </Header>
        
    );
