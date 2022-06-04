import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles';
import Pages from './pages';

export default () => (
    <BrowserRouter>
        <GlobalStyles />
        <Pages />
    </BrowserRouter>
);
