import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link>NAVBAR BRAND</Link>
                <div>
                    <ul className="navbar-nav">
                        <li className='nav-item'><Link className='nav-link' >HOME</Link></li>
                        <li className='nav-item'><Link className='nav-link' >ABOUT</Link></li>
                        <li className='nav-item'><Link className='nav-link' >PRODUCT</Link></li>
                        <li className='nav-item'><Link className='nav-link' t>CONTACT US</Link></li>
                    </ul>
                </div>
            </nav >
            {/* < className='navbar-brand'>NAVBAR BRAND</ >
<div className='ml-auto'>
    <ul className="navbar-nav">
        <li className='nav-item'><Link className='nav-link' >HOME</Link></li>
        <li className='nav-item'><Link className='nav-link' >ABOUT</Link></li>
        <li className='nav-item'><Link className='nav-link' >PRODUCT</Link></li>
        <li className='nav-item'><Link className='nav-link' t>CONTACT US</Link></li>
    </ul>
</div> */}
        </>
    )
}

export default Navbar


