import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const url = 'https://portfolio-backend-1-o8b3.onrender.com/api/v1/projects'

const Projects = () => {
	const [projects, setProjects] = useState([])
	useEffect(() => {
		const getData = async () => {
			const response = await fetch(url)
			const data = await response.json()
			setProjects(data.newProject)
		}
		getData()
	}, [])

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
