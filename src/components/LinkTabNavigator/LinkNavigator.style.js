import styled from "styled-components";

export const LinkNavigator = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	justify-items: center;
	
	@media only screen and (max-width: 480px) {
		flex-direction: column;
		align-items: center;
	}
`
export const LinkText = styled.div`
	margin-left: 20px;
	margin-right: 20px;
	cursor: pointer;
	text-transform: uppercase;
	text-decoration: none;
	display: inline-block;
	position: relative;
	
	&::after {
		content: '';
		position: absolute;
		display: block;
		height: 2px; 
		right: 0; 
		bottom: 0; 
		left: 0;
		background: #fff;
		opacity: 0;
		transition: 0.2s transform, 0.2s opacity;
		transform: scaleX(0.5);
	}
	&:hover::after {
		opacity: 1;
		transform: scaleX(1);
	}
	
	@media only screen and (max-width: 480px) {
		margin-bottom: 10px;
	}
`

export const TextSpan = styled.span`
	display: block;
	position: relative;
	transition: 0.2s transform;
	transform: translateY(0);
	letter-spacing: 5px;
	
	&:hover {
		transform: translateY(-5px);
	}
`
