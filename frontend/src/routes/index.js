import React from 'react';

import Route from './Route';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';

export default function Routes() {
    return (
        <Routes>
            <Route path="/" exact element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} isPrivate />
            <Route path="/dashboard" element={<Dashboard />} isPrivate />

            <Route path="/" element={<NotFound />} />
        </Routes>
    );
}
