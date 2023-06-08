import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const navigateHandler = (params) => {
        navigate('./Products');
    };


    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to &nbsp;
                <Link to='/products'>Products</Link>
            </p>
            <p>
                <button onClick={navigateHandler} >navigate</button>
            </p>
        </>
    );
};

export default Home;