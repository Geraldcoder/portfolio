import React, { useContext, useState, useEffect } from 'react'
const url = 'https://portfolio-backend-1-o8b3.onrender.com/api/v1/projects'

const ProductProvider = React.createContext()

const AppProvider = ({ children }) => {
	const [openAccordionId, setOpenAccordionId] = useState(null)
	const [projects, setProjects] = useState([])

	const loadProjects = () => {
		useEffect(() => {
			const getData = async () => {
				const response = await fetch(url)
				const data = await response.json()
				setProjects(data.newProject)
			}
			getData()
		}, [])
	}

	function accordionHandler(id) {
		setOpenAccordionId(openAccordionId === id ? null : id)
	}

	return (
		<ProductProvider.Provider
			value={{
				accordionHandler,
				openAccordionId,
				projects,
				loadProjects,
			}}>
			{children}
		</ProductProvider.Provider>
	)
}

export { AppProvider, ProductProvider }

export const useGlobalContext = () => {
	return useContext(ProductProvider)
}
