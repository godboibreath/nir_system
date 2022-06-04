import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '../components';

import Dashboard from './Dashboard';
import CollectUserRates from './CollectUserRates';
import UserRates from './UserRates';

export default () => (
    <Layout>
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user-rates" element={<UserRates />} />
            <Route path="/collect-user-rates" element={<CollectUserRates />} />
        </Routes>
    </Layout>
);
