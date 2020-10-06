import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {createProject} from '../../redux/actions/projectAction'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";

function CreateProject() {
    //const [isAuth, setIsAuth] = useState({})
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    const dispatch = useDispatch();
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const project = {
            title,
            content,
        }
        dispatch(createProject(project));
        history.push("/");
    }

    const isAuth = useSelector(state => state.firebase.auth)
    if(!isAuth.uid) return <Redirect to='/signin'></Redirect>
    return (
        <div className='container'>
            <form className='white'>
                <h5 className='grey-text text-darken-3'>Add project</h5>
                <div className='input-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}></input>
                </div>
                <div className='input-field'>
                    <label htmlFor='content'>Content</label>
                    <textarea id='content' className='materialize-textarea' value={content} onChange={(e) => setContent(e.currentTarget.value)}></textarea>
                </div>
                <div className='input-field'>
                    <button onClick={(e) =>handleSubmit(e)} className='btn pink lighten-1 z-depth-0'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
