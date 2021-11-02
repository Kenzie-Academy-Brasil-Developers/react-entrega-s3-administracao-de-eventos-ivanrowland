import { useHistory } from "react-router-dom"
import { NavBar, Button } from "./style"

const Menu = () => {

	const history = useHistory()

	const sendTo = (path) => {
		history.push(path)
	}

	return (

		<NavBar>

			<Button
				type="button"
				onClick={() => sendTo("/")}>
				Home
			</Button>

			<Button
				type="button"
				onClick={() => sendTo("/casamento")}>
				Casamento
			</Button>

			<Button
				type="button"
				onClick={() => sendTo("/confraternizacao")}>
				Confraternização
			</Button>

			<Button
				type="button"
				onClick={() => sendTo("/formatura")}>
				Formatura
			</Button>

		</NavBar>
	)
}

export default Menu