import { Card, Description, Button } from "./style.js"

const CardDrink = ({ drinkInfo, addEvent = false, handleChoseEvent, handleClick }) => {

	const { name, first_brewed, description, image_url, id, volume } = drinkInfo

	return (
		<>

			<Card key={id}>

				<img src={image_url} alt={name} />

				<h3>{name}</h3>

				<h5>{`Quantidade: ${volume.value}L`}</h5>

				<h5>{first_brewed}</h5>

				<Description>
					<strong>Descrição:</strong> {description}
				</Description>

				{addEvent ? (
					<Button onClick={() => handleChoseEvent(drinkInfo)}
					>
						Adicionar ao evento
					</Button>
				) : (
					<Button
						onClick={() => handleClick(id)}>
						Remover do envento
					</Button>
				)}
			</Card>

		</>
	)
}

export default CardDrink