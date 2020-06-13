import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'

export default class Education extends Component {
	state = {
		data: [],
	}

	componentDidMount() {
		fetch('data/education.json')
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
	}

	render() {
		const { data } = this.state
		return (
			<FadeIn>
				<EducationContainer>
					<HeaderText>Education</HeaderText>
					{data.map((item) => (
						<EducationBlock key={`university--${item.university}`}>
							<EducationName>{`- ${item.major}`}</EducationName>
							<EducationYear>
								<ul>
									<li>{`${item.university} @ ${item.year}`}</li>
								</ul>
							</EducationYear>
						</EducationBlock>
					))}
				</EducationContainer>
			</FadeIn>
		)
	}
}

export const EducationContainer = styled.div``
export const EducationBlock = styled.div`
	margin-bottom: 30px;
`
export const EducationName = styled.div``
export const EducationYear = styled.div``
export const HeaderText = styled.h1`
	font-style: italic;
`
