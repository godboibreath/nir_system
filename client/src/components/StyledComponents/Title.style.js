import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    ${({ style }) => style && css(style)}
`;
