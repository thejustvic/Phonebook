import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLinks.jsx'
import SignedOutLink from './SignedOutLink.jsx'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>Phonebook</Link>
                <SignedInLink />
                <SignedOutLink />
            </div>
        </nav>
    )
}

export default Navbar