import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

import { Redirect } from 'react-router-dom'
import moment from 'moment'

function ProjectDetails(props) {
    const id = props.match.params.id;

    useFirestoreConnect([{ collection: 'projects' }])
    const posts = useSelector(state => state.firestore.data.projects)
    const post = posts ? posts[id] : null;

    const isAuth = useSelector(state => state.firebase.auth)
    if(!isAuth.uid) return <Redirect to='/signin'></Redirect>
    if(post){
        return (
            <div className='container section project-section'>
                <div className='card z-depth-0'>
                    <div className='card-content'>
                        <span className='card-title'>Project Title - {post.title}</span>
                        <p>{post.content}</p>
                    </div>
                    <div className='card-action gret leghten-4 grey-text'>
                        <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                        <div>{moment(post.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className='container center'>
                <p>Loading...</p>
            </div>
        )
    }
}

export default ProjectDetails
