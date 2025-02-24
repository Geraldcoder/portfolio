import React from 'react'
// import Image from '../images/young-graduate.jpg'

const Contact = () => {
	const email = 'Edoziesml@gmail.com'
	const phoneNumber = '+2347066268178'

	return (
		<div className='contact-container container'>
			<div className='contact-grid'>
				<h2 className='header'>Get In Touch</h2>
				<p className='contact-description'>
					Looking for a reliable and skilled developer to collaborate on
					exciting projects? let's connect! Whether you need assistance with web
					development, have a creative idea, or simply want to discuss potential
					opportunities, I'm here to help. I am committed to delivering
					exceptional results and providing the best possible experience for my
					clients.
				</p>
				<div className='contact-card'>
					<div className='contact-card-box'>
						<div className='contact-card-info'>
							<i className='fa-solid fa-phone'></i>
							<div>
								<h3 className='contact-card-title'>Call</h3>
								<p className='contact-card-description'>{phoneNumber}</p>
							</div>
						</div>
						<button
							onClick={() => (window.location.href = `tel:${phoneNumber}`)}
							className=' contact-card-button'>
							Call Now
						</button>
					</div>
					<div className='contact-card-box'>
						<div className='contact-card-info'>
							<i className='fa-solid fa-envelope'></i>
							<div>
								<h3 className='contact-card-title'>Email</h3>
								<p className='contact-card-description'>{email}</p>
							</div>
						</div>
						<button
							onClick={() => (window.location.href = `mailto:${email}`)}
							className='contact-card-button'>
							Send Email
						</button>
					</div>
				</div>
			</div>
			<div className='footer'>
				<h4>All Rights Reserved</h4>
				<div className='icons'>
					<a href='https://linkedin.com'>
						<i className='fa fa-linkedin'></i>
					</a>
					<a href='https://github.com/Geraldcoder'>
						<i className='fa-brands fa-github'></i>
					</a>
					<a href='https://x.com/Geraldedoofisha'>
						<i className='fa-brands fa-x-twitter'></i>
					</a>
					<a href={`mailto:${email}`}>
						<i className='fa-brands fa-google'></i>
					</a>
					<a href='https://instagram.com/Geraldedo_official'>
						<i className='fa fa-instagram'></i>
					</a>
					{/* <i className='fa fa-facebook'></i>
					<i className='fa fa-instagram'></i>
					<i className='fa fa-twitter'></i>
					<i className='fa fa-linkedin'></i> */}
				</div>
			</div>
		</div>
	)
}

export default Contact
