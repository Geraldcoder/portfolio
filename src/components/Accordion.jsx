import React, { useState } from 'react'
import Image from '../images/young-graduate.jpg'
import { useGlobalContext } from '../context'
import Data from '../../OfferList'

const Accordion = () => {
	const [accordItems, setAccordItems] = useState(Data)
	const { openAccordionId, accordionHandler } = useGlobalContext()

	return (
		<section className='accordion-section container'>
			<div className=' accordion-container'>
				<h1 className='accordion-header header'>What I Offer</h1>
				<div className='accordion-content'>
					<div className='accordion-left'>
						<div className='accordion-img'>
							<img src={Image} alt='' />
						</div>
					</div>

					<div className='accordion-container '>
						<h2>Frequently Asked Questions/Answers </h2>
						{accordItems.map((item) => {
							const { id, title, body } = item
							const isOpen = openAccordionId === id
							return (
								<div key={id} className='accordion-wrapper'>
									<div className='accordion-title'>
										<button onClick={() => accordionHandler(id)}>
											{isOpen ? (
												<i className='fa-solid fa-minus' />
											) : (
												<i className='fa-solid fa-angle-down' />
											)}
										</button>
										<h3>{title}</h3>
									</div>
									<p
										className={`accordion-container ${
											isOpen ? ' accordion-body ' : ' accordion-close '
										}`}>
										{body}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Accordion
