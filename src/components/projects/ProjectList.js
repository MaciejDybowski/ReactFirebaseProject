import React from 'react'
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

function ProjectList({ projects }) {
    return (
        <div className='project-list section'>
            { projects && projects.map((item) =>
                <Link key={item.id} to={`/project/${item.id}`}>
                    <ProjectSummary key={item.id} data={item} />
                </Link>
            )}
        </div>
    )
}

export default ProjectList;
