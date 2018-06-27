import React, { Component } from 'react';
import { LinkNavigator, LinkText, TextSpan } from './LinkNavigator.style'
import { inject, observer } from 'mobx-react'

@inject('navigator', 'global')
@observer
class LinkTabNavigator extends Component {
	render() {
		const { navigator, global } = this.props

		return (
			<LinkNavigator>
				{
					navigator.getNavigators.map((nav) => {
						return (
							<LinkText key={`${nav.tabIndex}--${nav.title}`} active={global.currentActiveIndex === nav.tabIndex} onClick={() => global.changeTab(nav.tabIndex)}>
								<TextSpan>{nav.title}</TextSpan>
							</LinkText>
						)
					})
				}
			</LinkNavigator>
		);
	}
}

export default LinkTabNavigator;
