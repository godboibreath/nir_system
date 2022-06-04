import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Styled from './styles';
import { linkList } from './constants';

export default () => {
    const { pathname } = useLocation();
    return (
        <Styled.Sidebar>
            <Styled.Nav>
                <Styled.List>
                    {linkList.map(({ name, link, isHome }, idx) => (
                        <Styled.ListItem
                            isActive={(pathname === '/' && isHome) || pathname.startsWith(link)}
                            key={`${name}${link}${idx}`}
                        >
                            <Link to={link}>{name}</Link>
                        </Styled.ListItem>
                    ))}
                </Styled.List>
            </Styled.Nav>
        </Styled.Sidebar>
    );
};
