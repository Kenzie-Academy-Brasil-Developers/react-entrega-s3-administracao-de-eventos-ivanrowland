import { createContext, useState } from "react"

export const ConfraternizacaoContext = createContext([])

export const ConfraternizacaoProvider = ({ children }) => {

	const [confraternizacaoDrink, setConfraternizacaoDrink] = useState([])

	const addConfraternizacaoDrink = (drinks, showEvent) => {
		setConfraternizacaoDrink([...confraternizacaoDrink, drinks])
		localStorage.setItem("confraternizacaoDrink", JSON.stringify([...confraternizacaoDrink, drinks]))
		showEvent(false)
	}

	const removeConfraternizacaoDrink = (drinkId) =>{

		const drinkToRemove = confraternizacaoDrink
		const indexToRemove = drinkToRemove.findIndex(item => item.id === drinkId)
		const removeItem = drinkToRemove.splice(indexToRemove, 1)

		setConfraternizacaoDrink([...drinkToRemove])
		localStorage.setItem("confraternizacaoDrink", JSON.stringify(drinkToRemove))
	}

	return (
		<>
			<ConfraternizacaoContext.Provider value={{ addConfraternizacaoDrink, removeConfraternizacaoDrink }}>
				{children}
			</ConfraternizacaoContext.Provider>
		</>
	)
}