import styled from '@emotion/styled';

const Layout = styled.div`
    background-color: #f2f7fb;
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Main = styled.main`
    flex: 1 1 auto;
    display: flex;
`;

const Content = styled.div`
    width: 85%;
    padding: 0.5rem;
`;

export default {
    Layout,
    Main,
    Content,
};
