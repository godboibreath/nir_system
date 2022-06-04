import React from 'react';

import ErrorBoundary from './components/ErrorBoundary';
import Sidebar from './components/Sidebar';

export default ({ children }) => {
    return (
        <ErrorBoundary>
            <Sidebar />
            {children}
        </ErrorBoundary>
    );
};
