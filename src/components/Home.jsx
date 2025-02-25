import React, { useEffect, useState } from 'react'
import About from './About'
import Projects from './Projects'
import Modal from './Accordion'
import Contact from './Contact'
import GeraldDesktop from '../images/Gerald_desktop.png'
import GeraldMobile from '../images/Gerald_mobile.JPG'

const Home = () => {
	const email = 'Edoziesml@gmail.com'
	const [apply, setApply] = useState({})

	useEffect(() => {
		const defaultStyle = {
			// height: 'auto',
			minHeight: '40rem',
			maxWidth: '100%',
			position: 'relative',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundImage: `url(${GeraldDesktop})`,
		}

		const handleResize = () => {
			const bgStyle =
				window.innerWidth < 730
					? {
							minHeight: '45rem',
							width: '100%',
							backgroundPosition: 'left',
							backgroundSize: 'cover',
							backgroundImage: `linear-gradient(
						rgba(0, 0, 0, 0.6),
						rgba(0, 0, 0, 0.6)
					),
					url(${GeraldMobile})`,
					  }
					: defaultStyle

			setApply(bgStyle)
		}

		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<>
			<section className='home-section container'>
				<div className='text-container' style={apply}>
					<div className='home-text'>
						<div className='center-text'>
							<h1>I'm Chiedozie</h1>
							<h5>A Web Developer</h5>
						</div>
						<div className='bottom-text-desc'>
							<p>I Transform Visions to Interactive Reality</p>
						</div>
						<div className='home-social-links'>
							<a href='https://linkedin.com'>
								<i className='fa-brands fa-linkedin'></i>
							</a>
							<a href='https://github.com/Geraldcoder'>
								<i className='fa-brands fa-square-github'></i>
							</a>
							<a href='https://x.com/Geraldedoofisha'>
								<i className='fa-brands fa-square-x-twitter'></i>
							</a>
							<a href={`mailto:${email}`}>
								<i className='fa-brands fa-square-google-plus'></i>
							</a>
						</div>
					</div>
				</div>
			</section>
			<About />
			<Projects />
			<Modal />
			<Contact />
		</>
	)
}

export default Home
