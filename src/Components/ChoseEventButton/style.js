import styled from "styled-components"

export const Span = styled.span`
	position: relative;
	
	background-color: #fff;
	
	width: 80vw;
	height: 28vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border: solid 1px #000;
	border-radius: 15px;
	h2{
		font-size: 1.6rem;
		color: #93618b;
	}
	@media (min-width: 500px){
		max-width: 400px;
	}
`

export const Button = styled.button`
		border: solid #000 1px;
		border-radius: 7px;
		padding: 5px;
		font-weight: 600;
		&:hover{
			background-color: #e8e8e8;
		}
`

export const CloseButton = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	font-size: 1rem;
	color: red;
	@media (min-width: 500px){
		font-size: 1.5rem;
	}
`