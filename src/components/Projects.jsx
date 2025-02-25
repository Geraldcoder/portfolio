import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Projects = () => {
	const { projects, loadProjects } = useGlobalContext()
	loadProjects()

	const firstFour = projects.slice(0, 4)
	return (
		<section className='project-section container'>
			<h1 className='header project-header'>My Projects</h1>
			<div className='projects-container'>
				<div className='img-container sm-container'>
					{firstFour.map((dataItem) => {
						const { id, title, link, imageUrl } = dataItem
						return (
							<Link key={id} to={link} className='pro-text'>
								<source srcSet='image.webp' type='image/webp' />
								<img src={imageUrl} alt='' />
								<div className='pro-text-title'>
									<h3>{title}</h3>
								</div>
							</Link>
						)
					})}
				</div>
				<Link to={'moreProjects'}>
					<button className='btn'>See All</button>
				</Link>
			</div>
		</section>
	)
}

export default Projects
