import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ style }) => style && css(style)}
`;
