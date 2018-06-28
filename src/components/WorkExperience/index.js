import React, { Component } from 'react';
import { HeaderText, WorkExperienceContainer } from './WorkExperience.style';
import FadeIn from 'react-fade-in';
import { inject, observer } from 'mobx-react';

@inject('portfolio')
@observer
class WorkExperience extends Component {
	render() {
		const { employee_training_experience, work_experiences } = this.props.portfolio

		return (
			<FadeIn>
				<WorkExperienceContainer>
					<HeaderText>Work Experience</HeaderText>
					{
						Object.keys(work_experiences).map((_key) => {
							return (
								<div key={`experience--${_key}`}>
									<h3>{work_experiences[_key].company}</h3>
									<ul>
										{
											Object.keys(work_experiences[_key].position).map((_key_position) => {
												let position = work_experiences[_key].position[_key_position]
												return (
													[
														<li key={`position--${_key_position}`}>{`${position.name}, ${position.date}`}</li>,
														<ul key={`responsibility--${_key_position}`}>
															{
																Object.keys(position.responsibility).map((_key_res) => {
																	let responsibility = position.responsibility[_key_res]
																	return (
																		<li key={`responsibility-item--${_key_res}`}>{`${responsibility.title}`}</li>
																	)
																})
															}
														</ul>
													]
												)
											})
										}
									</ul>
								</div>
							)
						})
					}

					<HeaderText>Employee Training Experience</HeaderText>
					<ul>
						{
							Object.keys(employee_training_experience).map((_key) =>{
								return (
									<li key={`training--${_key}`}>{employee_training_experience[_key].title}</li>
								)
							})
						}
					</ul>
				</WorkExperienceContainer>
			</FadeIn>
		);
	}
}

WorkExperience.defaultProps = {};

export default WorkExperience;
