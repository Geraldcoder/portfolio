import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import MoreProjects from './components/MoreProjects'
import Accordion from './components/Accordion'

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/accordion' element={<Accordion />} />
					<Route path='moreProjects' element={<MoreProjects />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</>
		)
	}
}
