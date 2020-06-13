import React, { Component } from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in'

export default class Skill extends Component {
	state = {
		data: [],
	}

	componentDidMount() {
		fetch('data/skill.json')
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
	}

	render() {
		const { data } = this.state
		return (
			<FadeIn>
				<SkillContainer>
					<HeaderText>Skill</HeaderText>

					<SkillContent>
						{data.map((item) => {
							return (
								<SkillColumn key={`skill--${item.id}`}>
									<h2>{item.title}</h2>
									<UL>
										{item.skills.map((skill, index) => {
											return <LI key={`skill--item--${index}`}>{skill}</LI>
										})}
									</UL>
								</SkillColumn>
							)
						})}
					</SkillContent>
				</SkillContainer>
			</FadeIn>
		)
	}
}

const SkillContainer = styled.div``
const SkillContent = styled.div`
	flex-direction: row;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	&:after {
		content: '';
		display: table;
		clear: both;
	}
`
const SkillColumn = styled.div`
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

const UL = styled.ul``
const LI = styled.li`
	margin-bottom: 10px;
`
const HeaderText = styled.h1`
	font-style: italic;
`
