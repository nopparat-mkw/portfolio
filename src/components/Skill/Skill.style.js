import styled from 'styled-components'

export const SkillContainer = styled.div`
	
`
export const SkillContent = styled.div`
	flex-direction: row;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	&:after {
		content: "";
		display: table;
		clear: both;
	}
`
export const SkillColumn = styled.div`
	box-sizing: border-box;
	float: left;
	width: 45%;
	padding: 10px;
	margin: 10px;
	height: 520px;
	
	@media only screen and (max-width: 480px) {
		width: 100%;
		margin: 0 0 10px 0;
		height: auto;
	}
`

export const UL = styled.ul``
export const LI = styled.li`
	margin-bottom: 10px;
`
export const HeaderText = styled.h1`
	font-style: italic;
`
