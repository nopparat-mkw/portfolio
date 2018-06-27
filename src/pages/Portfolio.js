import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components'
import Header from '../components/Header';
import { inject, observer } from 'mobx-react';
import Profile from '../components/Profile';
import Skill from '../components/Skill';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';

@inject('global')
@observer
class Portfolio extends Component {
	renderContent = () => {
		const { global } = this.props

		switch (global.activeIndex) {
			case 0:
				return <Profile/>
			case 1:
				return <Skill/>
			case 2:
				return <WorkExperience/>
			case 3:
				return <Education/>
			default:
				return <Profile/>
		}
	}

	render() {
		return (
			<Container>
				<Header/>
				{ this.renderContent() }
			</Container>
		);
	}
}

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Poiret+One');
	
	body {
		background: #222;
		color: #fff;
		font-family: 'Poiret One', cursive;
	}
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.15em;
	//min-height: 100vh;
	margin: 1% 13% 3% 13%;
	flex: 1;
`

export default Portfolio;
