import { CasamentoContext } from "../../providers/Casamento"
import CardDrink from "../../Components/CardDrink"
import { List, H2 } from "../Home/style"
import { useContext } from "react"

const DrinksCasamento = () => {

	const { removeCasamentoDrink } = useContext(CasamentoContext)
	const drinksCasamento = JSON.parse(localStorage.getItem("casamentoDrink")) || []

	return (
		<>

			{
				drinksCasamento.length === 0 && (
					<H2>Ainda não possui nenhum drink</H2>
				)
			}

			<List>
				{drinksCasamento.map((item, index) => (
					<CardDrink
						key={index}
						drinkInfo={item}
						handleClick={removeCasamentoDrink}
					/>
				))}
			</List>
		</>
	)
}

export default DrinksCasamento