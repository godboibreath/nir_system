import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.button`
    height: 2rem;
    fontsize: 1.2rem;
    text-transform: uppercase;
    background: #7783a1;
    border-radius: 5rem;
    color: white;
    outline: none;
    border: 0px;
    ${({ style }) => style && css(style)}
`;
