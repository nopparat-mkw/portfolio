import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'

export default class WorkExperience extends Component {
	state = {
		work: [],
		training: [],
	}

	componentDidMount() {
		fetch('data/work_experience.json')
			.then((res) => res.json())
			.then((json) => this.setState({ work: json }))

		fetch('data/training_experience.json')
			.then((res) => res.json())
			.then((json) => this.setState({ training: json }))
	}

	render() {
		const { work, training } = this.state

		return (
			<FadeIn>
				<WorkExperienceContainer>
					<HeaderText>Work Experience</HeaderText>
					{work.map((item) => {
						return (
							<div key={`experience--${item.id}`}>
								<h3>{item.company}</h3>
								<ul>
									{item.positions.map((position) => {
										return [
											<li key={`position--${position.id}`}>{position.position}</li>,
											<ul key={`exp--${position.id}`}>
												<li>{position.exp}</li>
											</ul>,
										]
									})}
								</ul>
							</div>
						)
					})}

					<HeaderText>Employee Training Experience</HeaderText>
					<ul>
						{training.map((item, index) => {
							return <li key={`training--${index}`}>{item}</li>
						})}
					</ul>
				</WorkExperienceContainer>
			</FadeIn>
		)
	}
}

export const WorkExperienceContainer = styled.div``

export const HeaderText = styled.h1`
	font-style: italic;
`
