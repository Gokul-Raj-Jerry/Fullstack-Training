import React from 'react'
import { Link } from 'react-router-dom'

let Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="/" className='navbar-brand'>NAVBAR BRAND</Link >
                <div className='ml-auto'>
                    <ul className="navbar-nav">
                        <li className='nav-item'><Link className='nav-link' to="/">HOME</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/About">ABOUT</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/Product">PRODUCT</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/Contact">CONTACT US</Link></li>
                    </ul>
                </div>
            </nav >
        </>
    )
}

export default Navbar