import React, { Component } from 'react'
import { Ball, Line, Wrapper } from './SectionSeparator.style'

class SectionSeparator extends Component {
	render() {
		return (
			<Wrapper>
				<Line/>
				{!!this.props.first && <Ball className='ball' />}
			</Wrapper>
		)
	}
}

export default SectionSeparator
