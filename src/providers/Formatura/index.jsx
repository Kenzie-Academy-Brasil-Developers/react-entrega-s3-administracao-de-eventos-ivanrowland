import { createContext, useState } from "react"

export const FormaturaContext = createContext([])

export const FormaturaProvider = ({ children }) => {
	const [formaturaDrink, setFormaturaDrink] = useState([])

	const addFormaturaDrink = (drinks, showEvent) => {
		setFormaturaDrink([...formaturaDrink, drinks])
		localStorage.setItem("formaturaDrink", JSON.stringify([...formaturaDrink, drinks]))
		showEvent(false)
	}

	const removeFormaturaDrink = (drinkId) => {

		const drinkToRemove = formaturaDrink
		const indexToRemove = formaturaDrink.findIndex(item => item.id === drinkId)
		const removeItem = drinkToRemove.splice(indexToRemove, 1)

		setFormaturaDrink([...formaturaDrink])
		localStorage.setItem("formaturaDrink", JSON.stringify(drinkToRemove))
	}

	return (
		<>
			<FormaturaContext.Provider value={{ addFormaturaDrink, removeFormaturaDrink }} >
				{children}
			</FormaturaContext.Provider >
		</>
	)
}