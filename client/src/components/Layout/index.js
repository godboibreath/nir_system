import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Headerbar from './components/Headerbar';
import Sidebar from './components/Sidebar';

import Styled from './styles';

export default ({ children }) => {
    return (
        <ErrorBoundary>
            <Styled.Layout>
                <Headerbar />
                <Styled.Main>
                    <Sidebar />
                    <Styled.Content>{children}</Styled.Content>
                </Styled.Main>
            </Styled.Layout>
        </ErrorBoundary>
    );
};
