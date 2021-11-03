import styled from "styled-components"

export const NavBar = styled.header`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	background-color: #202020;
	
	width: 100vw;
	height: 35px;
	@media (min-width: 550px){
		justify-content: center;
	}
	@media (min-width: 920px){
		height: 45px;
	}
`

export const Button = styled.button`
	color: #302727;
	font-size: 0.9rem;
	text-decoration: underline;
	&:hover{
		filter: brightness(0.8);
	}
	@media (min-width: 550px){
		margin: 0 36px;
		font-size: 1rem;
	}
	@media (min-width: 920px){
		margin: 0 36px;
		font-size: 1.3rem;
	}
`