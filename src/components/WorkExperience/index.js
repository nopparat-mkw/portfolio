import React, { Component } from 'react';
import { HeaderText, WorkExperienceContainer } from './WorkExperience.style';
import FadeIn from 'react-fade-in';

class WorkExperience extends Component {
	render() {
		return (
			<FadeIn>
				<WorkExperienceContainer>
					<HeaderText>Work Experience</HeaderText>
					<h3>@ 9PI COMPANY | BANGKOK</h3>
					<ul>
						<li>Senior Software Developer / Team Lead, June 2017 to present</li>
						<ul>
							<li>Design Project Structure Backend + Create Spring Project</li>
							<li>Design UML Class Diagram</li>
							<li>Writing Data Service</li>
							<li>Preparing Data</li>
							<li>Setup Apache Tomcat</li>
							<li>Deployed Code Backend in Server Test and Production</li>
							<li>Setup SSL</li>
							<li>Setup MySQL Server</li>
							<li>Design Project Structure Frontend</li>
							<li>Writing Frontend with React JS</li>
							<li>Setup Firebase Hosting</li>
							<li>Setup Heroku Hosting For Socket Staging Server</li>
							<li>Setup Ngnix</li>
							<li>Deployed Code Frontend in Server Test and Production</li>
							<li>Writing Docker Compose Running Development</li>
							<li>Writing CircleCI for auto test and deploy React JS</li>
							<li>Unit Test Backend</li>
							<li>Unit Test Frontend</li>
							<li>Teach Writing Frontend and Unit Test Frontend for Internship student</li>
							<li>Teach Writing Backend and Unit Test Backend for Internship student</li>
							<li>Create card backlog from prototype and present product owner</li>
							<li>Develop a strategy the team will use to reach its goal</li>
							<li>Plan Sprint and assign task to members</li>
							<li>Manage the daily scrum meeting</li>
							<li>Provide any training that team members need</li>
							<li>Communicate clear instructions to team members</li>
							<li>Listen to team members' feedback</li>
							<li>Monitor team members' participation</li>
							<li>Manage the flow of day-to-day operations</li>
							<li>Create reports to update the project owner on the team's progress</li>
							<li>Answers team member questions, helps with team member problems, and oversees team member work for quality and guideline compliance</li>
						</ul>

						<li>Software Developer, June 2016 to June 2017</li>
						<ul>
							<li>Create Component React for Meteor Framework</li>
							<li>Management Database Mongodb</li>
							<li>Deployed Code in Server Test and Production for Meteor Framework</li>
							<li>Integration Service</li>
							<li>Manual testing</li>
							<li>Report UI</li>
							<li>Design Project Structure Backend + Create Spring Project</li>
							<li>Design UML Class Diagram</li>
							<li>Writing Data Service</li>
							<li>Preparing Data</li>
							<li>Setup Apache Tomcat</li>
							<li>Deployed Code in Server Test and Production for Java Spring</li>
							<li>Setup SSL</li>
							<li>Setup MySQL Server</li>
						</ul>

						<li>Junior Software Developer, June 2015 to June 2016</li>
						<ul>
							<li>Writing Web Service Restful support Frontend, IOS and Android</li>
							<li>Implement Code PHP + Angular</li>
							<li>Integration Service in Frontend</li>
							<li>Implement Code Google App Script</li>
						</ul>
					</ul>

					<HeaderText>Employee Training Experience</HeaderText>
					<ul>
						<li>React JS</li>
						<li>React Redux + Redux Thunk</li>
						<li>CSS Framework Styled-component</li>
						<li>Deploy React to github page</li>
						<li>Basic git command</li>
						<li>Use Intellij IDE, webstorm ide</li>
						<li>CI/CD auto deploy react to gitlab page</li>
						<li>Java Spring Structure</li>
						<li>Writing Java Spring JPA + Hibernate</li>
						<li>Java Spring With Restful Web Service</li>
						<li>Structure request response between frontend and backend</li>
					</ul>
				</WorkExperienceContainer>
			</FadeIn>
		);
	}
}

WorkExperience.defaultProps = {};

export default WorkExperience;
