import React from 'react';

import StyledButton from './style';

export default ({ type, children, style }) => {
    return (
        <StyledButton type={type} style={style}>
            {children}
        </StyledButton>
    );
};
