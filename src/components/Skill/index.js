import React, { Component } from 'react';
import { SkillColumn, SkillContainer, UL, LI, SkillContent, HeaderText } from './Skill.style';
import FadeIn from 'react-fade-in';

class Skill extends Component {
	render() {
		return (
			<FadeIn>
				<SkillContainer>
					<HeaderText>Skill</HeaderText>

					<SkillContent>
						<SkillColumn>
							<h2>Backend</h2>
							<UL>
								<LI>Java OOPS</LI>
								<LI>SQL, MySQL</LI>
								<LI>Maven 3.5</LI>
								<LI>Java Spring</LI>
								<LI>Java Spring JPA</LI>
								<LI>Hibernate</LI>
								<LI>RestFul Web Service</LI>
								<LI>Socket.io</LI>
								<LI>Unit Test</LI>
							</UL>
						</SkillColumn>

						<SkillColumn>
							<h2>Frontend</h2>
							<UL>
								<LI>React JS</LI>
								<LI>ES6</LI>
								<LI>React Redux</LI>
								<LI>React thunk</LI>
								<LI>CircleCI</LI>
								<LI>Travis-ci</LI>
								<LI>Bitbucket Pipeline</LI>
								<LI>Unit Test</LI>
								<LI>Material-ui</LI>
								<LI>HTML</LI>
								<LI>Javascript</LI>
								<LI>Expo</LI>
							</UL>
						</SkillColumn>

						<SkillColumn>
							<h2>Server</h2>
							<UL>
								<LI>Digital Ocean</LI>
								<LI>Ubuntu 16.04</LI>
								<LI>Firebase Hosting</LI>
								<LI>Heroku Hosting</LI>
								<LI>Apache Tomcat</LI>
								<LI>Nginx</LI>
							</UL>
						</SkillColumn>

						<SkillColumn>
							<h2>Other</h2>
							<UL>
								<LI>Google API</LI>
								<LI>Github</LI>
								<LI>Gitlab</LI>
								<LI>Bitbucket</LI>
								<LI>Firebase</LI>
							</UL>
						</SkillColumn>
					</SkillContent>
				</SkillContainer>
			</FadeIn>

		);
	}
}

Skill.defaultProps = {};

export default Skill;
