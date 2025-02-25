import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://portfolio-backend-1-o8b3.onrender.com/api/v1/projects'

const MoreProjects = () => {
	const { projects, loadProjects } = useGlobalContext()
	loadProjects()
	return (
		<section className='project-section more-section container'>
			<div className='filter-buttons'>
				<button>All</button>
				<button>Full-Stack</button>
				<button>Front-End</button>
				<button>Back-End</button>
			</div>
			<div className='projects-container more-container container'>
				<div className='img-container'>
					{projects.map((dataItem) => {
						const { id, title, link, imageUrl } = dataItem
						return (
							<Link key={id} to={link} className='pro-text'>
								<img src={imageUrl} alt='' />
								<div className='pro-text-title'>
									<h3>{title}</h3>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default MoreProjects
