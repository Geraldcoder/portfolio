import React from 'react'
import Logo from '../images/Logo.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const Navbar = () => {
	// const { sideBar, openSideBar, closeSideBar } = useGlobalContext()
	return (
		<nav className='nav-container'>
			<ul className='nav-list'>
				<li>
					<Link to={'/'} className='link-text'>
						Home
					</Link>
				</li>
				<li>
					<Link to={'/about'} className='link-text'>
						About
					</Link>
				</li>
				<li>
					<Link to={'/projects'} className='link-text'>
						Projects
					</Link>
				</li>
				<li>
					<Link to={'/contact'} className='link-text'>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
