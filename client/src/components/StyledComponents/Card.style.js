import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.div`
    width: ${({ width }) => width || '100%'};
    backgroundcolor: white;
    box-shadow: #7783a1 0.2rem 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid #7783a1;
    padding: 0.5rem;
    ${({ style }) => style && css(style)}
`;
