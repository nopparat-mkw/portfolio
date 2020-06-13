import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Profile from './components/Profile'
import Skill from './components/Skill'
import WorkExperience from './components/WorkExperience'
import Education from './components/Education'

class App extends Component {
	state = {
		activeTab: 0,
	}

	changeTab = (tab) => {
		this.setState({
			activeTab: tab,
		})
	}

	renderContent = () => {
		switch (this.state.activeTab) {
			case 0:
				return <Profile />
			case 1:
				return <Skill />
			case 2:
				return <WorkExperience />
			case 3:
				return <Education />
			default:
				return <Profile />
		}
	}

	render() {
		return (
			<Container>
				<Header changeTab={this.changeTab} />
				{this.renderContent()}
			</Container>
		)
	}
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.15em;
	//min-height: 100vh;
	margin: 1% 13% 3% 13%;
	flex: 1;
`

export default App
