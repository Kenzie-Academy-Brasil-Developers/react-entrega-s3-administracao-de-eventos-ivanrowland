import { ConfraternizacaoContext } from "../../providers/Confraternizacao"
import { CasamentoContext } from "../../providers/Casamento"
import { FormaturaContext } from "../../providers/Formatura"
import { Span, CloseButton, Button } from "./style"
import { useContext } from "react"

import { AiOutlineCloseCircle } from "react-icons/ai"

const ChoseEventButton = ({ showEvents, drink, setShowEvents }) => {

	const { addCasamentoDrink } = useContext(CasamentoContext)
	const { addConfraternizacaoDrink } = useContext(ConfraternizacaoContext)
	const { addFormaturaDrink } = useContext(FormaturaContext)

	const closeChoseEvents = () => {
		setShowEvents(!showEvents)
	}

	return (

		<Span>

			<h2>
				Selecione um evento
			</h2>

			<CloseButton
				onClick={closeChoseEvents}>
				<AiOutlineCloseCircle />
			</CloseButton>

			<Button
				onClick={() => addCasamentoDrink(drink, setShowEvents)}>
				Casamento
			</Button>

			<Button
				onClick={() => addConfraternizacaoDrink(drink, setShowEvents)}>
				Confraternização
			</Button>

			<Button
				onClick={() => addFormaturaDrink(drink, setShowEvents)}>
				Formatura
			</Button>

		</Span>

	)
}

export default ChoseEventButton