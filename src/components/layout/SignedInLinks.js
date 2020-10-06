import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions/authAction'
import {useSelector} from 'react-redux';

function SignedInLinks() {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(signOut())
    }

    const profile = useSelector(state => state.firebase.profile)

    return (
        <ul className='right'>
            <li>
                <NavLink to='/create'>New Project</NavLink>
            </li>
            <li>
                <a href='/' onClick={(e) => handleClick(e)}>Sign Out</a>

            </li>
            <li>
                <NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks
