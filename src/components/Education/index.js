import React, { Component } from 'react';
import { EducationBlock, EducationContainer, EducationName, EducationYear } from './Education.style';

class Education extends Component {
	render() {
		return (
			<EducationContainer>
				<EducationBlock>
					<EducationName>- BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY | MAEJO UNIVERSITY</EducationName>
					<EducationYear><ul><li>2010 - 2015</li></ul></EducationYear>
				</EducationBlock>

				<EducationBlock>
					<EducationName>- CERTIFICATE OF VOCATIONAL EDUCATION IN SURVEYING | PHRAE TECHNICAL COLLEGE</EducationName>
					<EducationYear><ul><li>2007 - 2010</li></ul></EducationYear>
				</EducationBlock>
			</EducationContainer>
		);
	}
}

Education.defaultProps = {};

export default Education;
