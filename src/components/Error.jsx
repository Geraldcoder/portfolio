import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='container p-4.5'>
			<h1 className=' header'>Uh Ooh!!</h1>
			<p className='error-body pb-5'>
				We couldn't find any resource that matches that
			</p>
			<Link to={'/'} className='btn pt-8.5'>
				Back Home
			</Link>
		</div>
	)
}

export default Error
