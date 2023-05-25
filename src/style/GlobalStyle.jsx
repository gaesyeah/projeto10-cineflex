import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	*{
		user-select: none;
	}
	button {
		height: 43px;
		background: #E8833A;
		border: 2px solid #E8833A;
		border-radius: 3px;
		font-family: 'Roboto';
		font-size: 18px;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0 20px;
		cursor: pointer;
		&:hover{
			background: #FFFFFF;
			color: #E8833A;
			border: 2px solid #E8833A;
		}
		&:disabled {
			background-color: lightgray;
			cursor: not-allowed;
		}
	}
	input {
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 3px;
		height: 50px;
		margin-bottom: 25px;
		margin-top: 10px;
		padding: 0 10px;
		font-family: 'Roboto';
		font-size: 18px;
		display: flex;
		align-items: center;
		&::placeholder{
			font-style: italic;
		}
	}
`

export default GlobalStyle