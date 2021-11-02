import { createContext, useState } from "react"

export const CasamentoContext = createContext([])

export const CasamentoProvider = ({ children }) => {

	const [casamentoDrink, setCasamentoDrink] = useState([])
	
	const addCasamentoDrink = (drinks, showEvent) => {
		setCasamentoDrink([...casamentoDrink, drinks])
		localStorage.setItem("casamentoDrink", JSON.stringify([...casamentoDrink, drinks]))
		showEvent(false)
	}

	const removeCasamentoDrink = (drinkId) =>{

		const drinkToRemove = casamentoDrink
		const indexToRemove = casamentoDrink.findIndex(item => item.id === drinkId)
		const removeItem = drinkToRemove.splice(indexToRemove, 1)

		setCasamentoDrink([...drinkToRemove])
		localStorage.setItem("casamentoDrink", JSON.stringify(drinkToRemove))
	}

	return (
		<>
			<CasamentoContext.Provider value={{ addCasamentoDrink, removeCasamentoDrink }}>
				{children}
			</CasamentoContext.Provider>
		</>
	)
}