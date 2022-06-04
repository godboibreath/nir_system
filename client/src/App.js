import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles';
import { Layout } from './components';

export default () => (
    <BrowserRouter>
        <GlobalStyles />
        <Layout>
            <h1>Hello world!!! Content</h1>
        </Layout>
    </BrowserRouter>
);
