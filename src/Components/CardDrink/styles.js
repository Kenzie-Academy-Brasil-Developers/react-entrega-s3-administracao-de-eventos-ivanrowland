import styled from "styled-components"

export const Card = styled.li`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap; 
	justify-content: space-between;
	align-items: center;
	width: 45vw;
	margin: 20px 0;
	img{
		margin: 20px 0 15px;
		height: 200px;
		width: 95px;
	}
	h3{
		font-size: 1.5rem;
		margin: 0 0 10px;
	}
	@media (min-width: 600px){
		max-width: 282px;
	}
`

export const Description = styled.p`
	overflow: auto;
	max-height: 100px;
	margin: 10px 0;
	::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #d8d8d8; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: gray; 
}
`

export const Button = styled.button`
	border: solid 2px #000;
	border-radius: 5px;
	padding: 3px;
	cursor: pointer;
	font-size: 0.8rem;
	font-weight: 600;
	&:hover{
		background-color: #ececec;
	}
	@media (min-width: 550px){
		width: 185px;
    height: 30px;
    font-size: 0.9rem;
	}
`