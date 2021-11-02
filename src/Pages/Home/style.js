import styled from "styled-components"

export const Section = styled.section`
	position: relative;
	div{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
		background-color: #b1b1b16b;
	}
`

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	@media (min-width: 1000px){
		max-width: 1300px;
		margin: 0 auto;
	}
`

export const H2 = styled.h2`
	margin-top: 30px;
	font-size: 1.8rem;
`