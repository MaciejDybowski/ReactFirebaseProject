import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { useSelector } from 'react-redux'

function Navbar() {
    const state = useSelector(state => state.firebase.auth)

    return (
        <nav className="nav-wrapper grey darken-3">
            <div className='container'>
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                {state.uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
        </nav>
    )
}

export default Navbar
