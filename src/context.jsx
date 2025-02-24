import React, { useContext, useState } from 'react'

const ProductProvider = React.createContext()

const AppProvider = ({ children }) => {
	const [sideBar, setSideBar] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const [openAccordionId, setOpenAccordionId] = useState(null)

	const openSideBar = () => {
		setSideBar(true)
	}
	const closeSideBar = () => {
		setSideBar(false)
	}
	const openModal = () => {
		setModalOpen(true)
	}
	const closeModal = () => {
		setModalOpen(false)
	}
	function accordionHandler(id) {
		setOpenAccordionId(openAccordionId === id ? null : id)
	}

	return (
		<ProductProvider.Provider
			value={{
				sideBar,
				modalOpen,
				openModal,
				openSideBar,
				closeModal,
				closeSideBar,
				accordionHandler,
				openAccordionId,
			}}>
			{children}
		</ProductProvider.Provider>
	)
}

export { AppProvider, ProductProvider }

export const useGlobalContext = () => {
	return useContext(ProductProvider)
}
