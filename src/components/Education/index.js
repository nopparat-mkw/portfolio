import React, { Component } from 'react';
import { EducationBlock, EducationContainer, EducationName, EducationYear, HeaderText } from './Education.style';
import FadeIn from 'react-fade-in';
import { inject, observer } from 'mobx-react';

@inject('education')
@observer
class Education extends Component {
	render() {
		const { education } = this.props

		return (
			<FadeIn>
				<EducationContainer>
					<HeaderText>Education</HeaderText>
					{
						education.educations.map((education) =>
							<EducationBlock key={`${education.university}--${education.id}`}>
								<EducationName>{`- ${education.major} | ${education.university}`}</EducationName>
								<EducationYear><ul><li>{`${education.year}`}</li></ul></EducationYear>
							</EducationBlock>
						)
					}
				</EducationContainer>
			</FadeIn>
		);
	}
}

Education.defaultProps = {};

export default Education;
