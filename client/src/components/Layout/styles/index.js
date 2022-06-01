import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Layout = styled.div`
    background-color: #f2f7fb;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Container = styled.div`
    position: relative;
    overflow-x: hidden;
`;

const Content = styled.main`
    padding: 2rem;
    width: 100%;
    transition: 0.3s;
    transition-timing-function: linear;
    min-height: 100vh;
    ${({ showSidebar }) =>
        showSidebar
            ? css`
                  transform: translateX(15rem);
                  width: calc(100% - 15rem);
              `
            : css`
                  transform: translateX(0%);
                  width: 100%;
              `}
`;

export default {
    Layout,
    Container,
    Content,
};
