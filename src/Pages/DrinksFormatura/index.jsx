import { FormaturaContext } from "../../providers/Formatura"
import CardDrink from "../../Components/CardDrink"
import { List, H2 } from "../Home/style"
import { useContext } from "react"


const DrinksFormatura = () => {

	const { removeFormaturaDrink } = useContext(FormaturaContext)
	const drinksFormatura = JSON.parse(localStorage.getItem("formaturaDrink")) || []

	return (
		<>

			{drinksFormatura.length === 0 && (
				<H2>Ainda não possui nenhum drink</H2>
			)}

			<List>
				{drinksFormatura.map((item, index) => (
					<CardDrink
						key={index}
						drinkInfo={item}
						handleClick={removeFormaturaDrink}
					/>
				))}
			</List>
		</>
	)
}

export default DrinksFormatura