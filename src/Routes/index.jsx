import DrinksConfraternizacao from "../Pages/DrinksConfraternizacao"
import DrinksCasamento from "../Pages/DrinksCasamento"
import DrinksFormatura from "../Pages/DrinksFormatura"
import { Switch, Route } from "react-router-dom"
import Home from "../Pages/Home"

const Routes = () => {

	return (

		<>
			<Switch>

				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/casamento">
					<DrinksCasamento />
				</Route>

				<Route exact path="/confraternizacao">
					<DrinksConfraternizacao />
				</Route>

				<Route exact path="/formatura">
					<DrinksFormatura />
				</Route>

			</Switch>
		</>
	)
}

export default Routes