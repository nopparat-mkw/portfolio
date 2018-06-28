import React, { Component } from 'react';
import { SkillColumn, SkillContainer, UL, LI, SkillContent, HeaderText } from './Skill.style';
import FadeIn from 'react-fade-in';
import { inject, observer } from 'mobx-react';

@inject('portfolio')
@observer
class Skill extends Component {
	render() {
		const { skills } = this.props.portfolio

		return (
			<FadeIn>
				<SkillContainer>
					<HeaderText>Skill</HeaderText>

					<SkillContent>
						{
							Object.keys(skills).map((_key) => {
								return (
									<SkillColumn key={`skill--${_key}`}>
										<h2>{skills[_key].name}</h2>
										<UL>
											{
												Object.keys(skills[_key].items).map((_key_item) => {
													return (
														<LI key={`skill--item--${_key_item}`}>{skills[_key].items[_key_item].title}</LI>
													)
												})
											}
										</UL>
									</SkillColumn>
								)
							})
						}
					</SkillContent>
				</SkillContainer>
			</FadeIn>

		);
	}
}

Skill.defaultProps = {};

export default Skill;
