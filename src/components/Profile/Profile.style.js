import styled from 'styled-components'

export const ProfileImage = styled.div`
	margin-top: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
    
	img {
		width: 12em;
		height: 12em;
		border-radius: 50%;
		border: 1px solid #ebebeb;
	}
`

export const Name = styled.div`
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;
	
	@media only screen and (max-width: 480px) {
		font-size: 26px;
	}
`

export const Position = styled.div`
	font-size: 30px;
	font-style: italic;
	
	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
`

export const AboutBlock = styled.div`
	margin-top: 50px;
`

export const UL = styled.ul`
	
`

export const LI = styled.li`
	margin-bottom: 10px;
`
export const HeaderText = styled.h1`
	font-style: ;
`
