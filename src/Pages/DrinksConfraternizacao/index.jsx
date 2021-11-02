import { ConfraternizacaoContext } from "../../providers/Confraternizacao"
import CardDrink from "../../Components/CardDrink"
import { List, H2 } from "../Home/style"
import { useContext } from "react"

const DrinksConfraternizacao = () => {

	const { removeConfraternizacaoDrink } = useContext(ConfraternizacaoContext)
	const drinkConfraternizacao = JSON.parse(localStorage.getItem("confraternizacaoDrink")) || []

	return (
		<>

			{drinkConfraternizacao.length === 0 && (
				<H2>Ainda não possui nenhum drink</H2>
			)}

			<List>
				{drinkConfraternizacao.map((item, index) => (
					<CardDrink
						key={index}
						drinkInfo={item}
						handleClick={removeConfraternizacaoDrink}
					/>
				))}
			</List>
		</>
	)
}

export default DrinksConfraternizacao