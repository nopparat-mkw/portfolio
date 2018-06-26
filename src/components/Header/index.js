import React, { Component } from 'react'
import LinkTabNavigator from '../LinkTabNavigator'
import SectionSeparator from '../SectionSeparator'
import { HeaderContainer } from './Header.style'

const navigators = [
	{ title: 'About', tabIndex: 0 },
	{ title: 'Skill', tabIndex: 1 },
	{ title: 'Work Experience', tabIndex: 2 },
	{ title: 'Education', tabIndex: 3 },
]

class Header extends Component {
	render() {
		return (
			<HeaderContainer>
				<LinkTabNavigator navigators={navigators}/>
				<SectionSeparator first/>
			</HeaderContainer>
		)
	}
}

export default Header
