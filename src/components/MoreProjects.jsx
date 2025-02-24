import React from 'react'
import { Link } from 'react-router-dom'
import data from '../../proData'

const MoreProjects = () => {
	// const firstItem = data[7]
	// console.log(firstItem.type)
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
					{data.map((dataItem) => {
						const { id, title, link, image } = dataItem
						return (
							<Link key={id} to={link} className='pro-text'>
								<img src={image} alt='' />
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
