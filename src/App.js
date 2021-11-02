import { ConfraternizacaoProvider } from "./providers/Confraternizacao"
import { CasamentoProvider } from "./providers/Casamento"
import { CatalogueProvider } from "./providers/Catalogue"
import { FormaturaProvider } from "./providers/Formatura"
import Routes from "./Routes"
import "./App.css"

import Menu from "./Components/Menu"

function App() {
	return (
		<div className="App">
			<CatalogueProvider>
				<CasamentoProvider>
					<ConfraternizacaoProvider>
						<FormaturaProvider>
							<Menu />
							<Routes />
						</FormaturaProvider>
					</ConfraternizacaoProvider>
				</CasamentoProvider>
			</CatalogueProvider>
		</div>
	)
}

export default App