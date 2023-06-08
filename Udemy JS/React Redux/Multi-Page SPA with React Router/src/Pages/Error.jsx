import React from 'react';
import MainNav from '../components/MainNav';

const Error = () => {
    return (
        <>
            <MainNav />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find this page</p>
            </main>

        </>
    );
};

export default Error;