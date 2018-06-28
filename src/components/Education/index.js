import React, { Component } from 'react';
import { EducationBlock, EducationContainer, EducationName, EducationYear, HeaderText } from './Education.style';
import FadeIn from 'react-fade-in';
import { inject, observer } from 'mobx-react';

@inject('portfolio')
@observer
class Education extends Component {
	render() {
		const { educations } = this.props.portfolio
		
		return (
			<FadeIn>
				<EducationContainer>
					<HeaderText>Education</HeaderText>
					{
						Object.keys(educations).map((_key) =>
							<EducationBlock key={`university--${educations[_key].university}`}>
								<EducationName>{`- ${educations[_key].major} | ${educations[_key].university}`}</EducationName>
								<EducationYear><ul><li>{`${educations[_key].year}`}</li></ul></EducationYear>
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
