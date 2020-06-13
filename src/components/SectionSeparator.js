import React from 'react'
import styled from 'styled-components'

const SectionSeparator = (props) => {
	return (
		<Wrapper>
			<Line />
			{!!props.first && <Ball className="ball" />}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 30px 0;
`

const Line = styled.div`
	margin: 0 auto;
	width: 2px;
	//height: 70px;
	height: 35px;
	background: #ccc;
`

const Ball = styled.div`
	margin: -1px auto 0;
	width: 20px;
	height: 20px;
	background: #ccc;
	border-radius: 50%;
`

export default SectionSeparator
