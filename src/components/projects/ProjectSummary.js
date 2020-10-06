import React from 'react'
import moment from 'moment'

function ProjectSummary({ data }) {
    return (
        <div className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>{data.title}</span>
                <p>Posted by {data.authorFirstName} {data.authorLastName}</p>
                <p className='grey-text'>{moment(data.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary
