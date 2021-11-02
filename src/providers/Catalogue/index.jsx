import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const CatalogueContext = createContext([])

export const CatalogueProvider = ({ children }) => {

	const [catalogue, setCatalogue] = useState([])
	const [drink, setDrink] = useState([])
	const [confraternizacaoDrink, setConfraternizacaoDrink] = useState("teste")

	const choseCatalogueDrink = () => {
		axios
			.get("https://api.punkapi.com/v2/beers")
			.then(response => setCatalogue(response.data))
	}
	
	useEffect(() => {
		choseCatalogueDrink()
	}, [])

	return (
		<>
			<CatalogueContext.Provider value={{confraternizacaoDrink, catalogue, drink, setDrink}} >
				{children}
			</CatalogueContext.Provider>
		</>
	)
}