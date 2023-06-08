import React from 'react';
import { Outlet } from 'react-router';
import MainNav from '../components/MainNav';

const Root = () => {
    return (
        <>
            <MainNav />
            <main>
                <Outlet />
            </main>

        </>
    );
};

export default Root;