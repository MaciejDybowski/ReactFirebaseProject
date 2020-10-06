import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/actions/authAction'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        dispatch(signIn(data))
    }

    const isAuth = useSelector(state => state.firebase.auth)
    if(isAuth.uid) return <Redirect to='/'></Redirect>
    return (
        <div className='container'>
            <form className='white'>
                <h5 className='grey-text text-darken-3'>Sign In</h5>
                <div className='input-field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <button onClick={handleSubmit} className='btn pink lighten-1 z-depth-0'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
