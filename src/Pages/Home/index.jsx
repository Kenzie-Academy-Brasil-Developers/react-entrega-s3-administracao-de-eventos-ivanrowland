import ChoseEventButton from "../../Components/ChoseEventButton"
import { CatalogueContext } from "../../providers/Catalogue"
import CardDrink from "../../Components/CardDrink"
import { useContext, useState } from "react"
import { List, Section, } from "./style"

const Home = () => {

	const { catalogue, drink, setDrink } = useContext(CatalogueContext)
	const [showEvents, setShowEvents] = useState(false)


	const handleChoseEvent = (item) => {
		setShowEvents(!showEvents)
		setDrink(item)
	}

	return (

		<Section>

			{showEvents && (
				<div>
					<ChoseEventButton
						drink={drink}
						setShowEvents={setShowEvents}
						showEvents={showEvents}
					/>
				</div>
			)}

			<List>
				{catalogue.map(item => (
					<CardDrink
						key={item.id}
						drinkInfo={item}
						handleChoseEvent={() => handleChoseEvent(item)}
						showEvents={showEvents}
						addEvent
					/>
				))}
			</List>

		</Section>

	)
}

export default Home