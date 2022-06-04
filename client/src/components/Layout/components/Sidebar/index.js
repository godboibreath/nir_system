import React from 'react';
import { Link } from 'react-router-dom';

import Styled from './styles';
import { linkList } from './constants';

export default () => {
    return (
        <Styled.Sidebar>
            <Styled.Nav>
                <Styled.List>
                    {linkList.map(({ name, link }, idx) => (
                        <Styled.ListItem key={`${name}${link}${idx}`}>
                            <Link to={link}>{name}</Link>
                        </Styled.ListItem>
                    ))}
                </Styled.List>
            </Styled.Nav>
        </Styled.Sidebar>
    );
};
