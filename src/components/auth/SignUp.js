import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../redux/actions/authAction'

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            firstName,
            lastName,
        }
        dispatch(signUp(user))

    }
    const isAuth = useSelector(state => state.firebase.auth)
    if(isAuth.uid) return <Redirect to='/'></Redirect>
    return (
        <div className='container'>
            <form className='white'>
                <h5 className='grey-text text-darken-3'>Sign Up</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <label htmlFor='firstName'>First name</label>
                    <input type='text' id='firstName' value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <label htmlFor='lastName'>Last name</label>
                    <input type='text' id='lastName' value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <button onClick={(e) => handleSubmit(e)} className='btn pink lighten-1 z-depth-0'>Register</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp
